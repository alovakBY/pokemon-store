import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useCart } from "../../../hooks/useCart";

import { OrdersLayout } from "../components/OrdersLayout";

import * as actions from "../actions";
import { orderSeletor } from "../selectors";

export const OrdersContainer = () => {
    const dispatch = useDispatch();
    const { cartInfo } = useCart();
    const { customerId, itemsList, totalPrice } = cartInfo;
    const { orders, isLoading } = useSelector(orderSeletor);

    useEffect(() => {
        dispatch(actions.GET_ORDERS_REQUEST());
    }, []);

    const handleSetOrder = useCallback(() => {
        dispatch(
            actions.SET_ORDER_REQUEST({ customerId, itemsList, totalPrice })
        );
    }, []);

    return (
        <OrdersLayout
            orders={orders}
            isLoading={isLoading}
            itemsList={itemsList}
            totalPrice={totalPrice}
            handleSetOrder={handleSetOrder}
        />
    );
};
