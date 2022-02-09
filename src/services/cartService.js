import api from "../api/config";

class CartService {
  static instance = new CartService();

  getCartItems() {
    return api.get(`/cart`);
  }

  setCartItem({ id, name, image, price, quantity }) {
    const data = { id, name, image, price, quantity };
    //   console.log(data);
    return api.post(`/cart/item`, {
      id,
      name,
      image,
      quantity,
      price,
    });
  }

  //  updateCartItem;

  //  deleteCartItem;
}

export default CartService.instance;
