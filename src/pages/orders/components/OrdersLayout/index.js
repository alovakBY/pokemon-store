import { OrderItem } from "../OrderItem";

import classes from "./OrderLayout.module.css";

export const OrdersLayout = ({ itemsList, totalPrice, handleSetOrder }) => {
    const ActiveOrder = itemsList.map(({ id, ...pokemon }) => {
        return <OrderItem key={id} pokemon={pokemon} />;
    });
    return (
        <div>
            <div className={classes.activeOrderWrapper}>
                <div className={classes.tableTitle}>Your active order</div>
                <table className={classes.table}>
                    <thead>
                        <tr className={classes.tableTop}>
                            <th>Product</th>
                            <th>Subtotal</th>
                        </tr>
                        {ActiveOrder}
                        <tr className={classes.tableBottom}>
                            <th>Total</th>
                            <th>${totalPrice}</th>
                        </tr>
                    </thead>
                </table>
                <div className={classes.buttonWrapper}>
                    <button
                        onClick={handleSetOrder}
                        className={
                            itemsList.length === 0 ? classes.disabled : ""
                        }
                    >
                        Place order
                    </button>
                </div>
            </div>
        </div>
    );
};
