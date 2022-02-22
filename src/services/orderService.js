import api from "../api/config";

class OrderService {
    static instance = new OrderService();

    getOrders() {
        return api.get(`/order`);
    }

    setOrders({ customerId, totalPrice, itemsList }) {
        console.log(customerId, totalPrice, itemsList);
        return api.post(`/order`, {
            customerId,
            totalPrice,
            itemsList,
        });
    }
}

export default OrderService.instance;
