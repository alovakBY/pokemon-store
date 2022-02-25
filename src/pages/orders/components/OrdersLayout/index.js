import { Spinner } from "../../../../commonComponents/Spinner";
import { Button } from "../../../../commonComponents/Button";

import { ActiveOrders } from "../ActiveOrders";
import { CompletedOrders } from "../CompletedOrders";

import classes from "./OrderLayout.module.css";

export const OrdersLayout = ({
    orders,
    itemsList,
    totalPrice,
    isLoading,
    handleSetOrder,
}) => {
    return (
        <>
            <div className={classes.title}>
                <span>Orders</span>
            </div>
            <div className={classes.marginTop}>
                <div className={classes.activeOrderWrapper}>
                    {isLoading && <Spinner screen={false} />}
                    <div className={classes.tableTitle}>Your order:</div>
                    {itemsList.length === 0 ? (
                        <div>No active orders</div>
                    ) : (
                        <>
                            <ActiveOrders
                                itemsList={itemsList}
                                totalPrice={totalPrice}
                                handleSetOrder={handleSetOrder}
                            />
                            <div className={classes.buttonWrapper}>
                                <div>
                                    <Button
                                        text="Place order"
                                        type="button"
                                        callback={handleSetOrder}
                                        disabled={
                                            itemsList === 0 ? true : false
                                        }
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <div className={classes.completedOrdersWrapper}>
                    <div className={classes.completedOrdersTitle}>
                        Completed orders:
                    </div>
                    <CompletedOrders orders={orders} />
                </div>
            </div>
        </>
    );
};
