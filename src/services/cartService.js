import api from "../api/config";

class CartService {
    static instance = new CartService();

    getCartItems() {
        return api.get(`/cart`);
    }

    setCartItem({ id, name, image, price, quantity }) {
        return api.post(`/cart/item`, {
            id,
            name,
            image,
            quantity,
            price,
        });
    }

    updateCartItem({ id, quantity }) {
        return api.patch(`/cart/item`, {
            id,
            quantity,
        });
    }

    //  deleteCartItem;
}

export default CartService.instance;
