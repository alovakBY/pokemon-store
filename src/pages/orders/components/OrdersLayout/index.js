import { OrderItem } from "../OrderItem";

import classes from "./OrderLayout.module.css";

export const OrdersLayout = ({ cartInfo }) => {
    const { customerId, itemsList, totalPrice, quantity } = cartInfo;
    const ActiveOrder = itemsList.map(({ id, ...pokemon }) => {
        return <OrderItem key={id} pokemon={pokemon} />;
    });
    return (
        <div className={classes.activeOrder}>
            <div className={classes.activeOrderTop}>
                <span>Product</span>
                <span>Subtotal</span>
            </div>
            {ActiveOrder}
            <div>
                <span>Total</span>
                <span>${totalPrice}</span>
            </div>
        </div>
    );
};
