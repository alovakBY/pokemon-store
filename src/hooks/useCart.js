import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../pages/cart/actions";
import { cartSelector } from "../pages/cart/selectors";

export const useCart = () => {
    const dispatch = useDispatch();
    const {
        isLoading: cartLoading,
        errors: cartError,
        clickedPokemonId,
        cartInfo,
    } = useSelector(cartSelector);

    const getCartItems = useCallback(() => {
        dispatch(actions.GET_CART_ITEMS_REQUEST());
    }, []);

    const setCartItem = useCallback(({ id, name, image, price }) => {
        const quantity = 1;
        dispatch(
            actions.SET_CART_ITEM_REQUEST({
                id,
                name,
                image,
                quantity,
                price,
            })
        );
    }, []);

    const updateCartItem = useCallback(({ id, quantity }) => {
        dispatch(actions.UPDATE_CART_ITEM_REQUEST({ id, quantity }));
    }, []);

    const deleteCartItem = useCallback((id) => {
        dispatch(actions.DELETE_CART_ITEM_REQUEST({ id: +id }));
    }, []);

    return {
        cartInfo,
        cartLoading,
        cartError,
        clickedPokemonId,
        getCartItems,
        setCartItem,
        updateCartItem,
        deleteCartItem,
    };
};
