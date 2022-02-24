import { Spinner } from "../../../../commonComponents/Spinner";
import { ActiveOrders } from "../ActiveOrders";
import { CompletedOrderItem } from "../CompletedOrders";

import classes from "./OrderLayout.module.css";

export const OrdersLayout = ({
    orders,
    itemsList,
    totalPrice,
    isLoading,
    handleSetOrder,
}) => {
    const completedOrders = orders.map(
        ({ createdAt, totalPrice, itemsList }) => {
            <CompletedOrderItem
                createdAt={createdAt}
                totalPrice={totalPrice}
                itemsList={itemsList}
            />;
        }
    );
    return (
        <div className={classes.container}>
            <div className={classes.activeOrderWrapper}>
                {isLoading ? <Spinner screen={false} /> : null}
                <div className={classes.tableTitle}>Active order:</div>
                {itemsList.length === 0 ? (
                    <div>No active orders</div>
                ) : (
                    <>
                        <ActiveOrders
                            itemsList={itemsList}
                            totalPrice={totalPrice}
                            handleSetOrder={handleSetOrder}
                        />
                    </>
                )}
            </div>
            <div className={classes.completedOrdersWrapper}>
                <div className={classes.completedOrdersTitle}>
                    Completed orders:
                </div>
            </div>
        </div>
    );
};
