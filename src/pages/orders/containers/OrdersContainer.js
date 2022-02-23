import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { useCart } from "../../../hooks/useCart";

import { OrdersLayout } from "../components/OrdersLayout";

import * as actions from "../actions";

export const OrdersContainer = () => {
    const dispatch = useDispatch();
    const { cartInfo } = useCart();
    const { customerId, itemsList, totalPrice } = cartInfo;

    const handleSetOrder = useCallback(() => {
        dispatch(
            actions.SET_ORDER_REQUEST({ customerId, itemsList, totalPrice })
        );
    }, []);

    return (
        <OrdersLayout
            itemsList={itemsList}
            totalPrice={totalPrice}
            handleSetOrder={handleSetOrder}
        />
    );
};
