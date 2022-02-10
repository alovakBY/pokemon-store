import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../pages/cart/actions";
import { cartSelector } from "../pages/cart/selectors";

export const useCart = () => {
    const dispatch = useDispatch();
    const {
        isLoading: cartLoading,
        errors: cartError,
        cartInfo,
        isCart,
    } = useSelector(cartSelector);

    const getCartItems = useCallback(() => {
        dispatch(actions.GET_CART_ITEMS_REQUEST());
    }, []);

    const setCartItem = useCallback(({ id, name, image, price }) => {
        const quantity = 1;
        dispatch(
            actions.SET_CART_ITEM_REQUEST({ id, name, image, quantity, price })
        );
    }, []);

    return {
        cartInfo,
        cartLoading,
        cartError,
        isCart,
        getCartItems,
        setCartItem,
    };
};
