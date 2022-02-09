import { useDispatch, useSelector } from "react-redux";

import * as actions from "../pages/cart/actions";

export const useCart = () => {
    const dispatch = useDispatch();

    const getCartItems = () => {
        dispatch(actions.GET_CART_ITEMS_REQUEST());
    };

    const setCartItem = ({ id, name, image, price }) => {
        const quantity = 1;
        dispatch(
            actions.SET_CART_ITEM_REQUEST({ id, name, image, quantity, price })
        );
    };

    return { getCartItems, setCartItem };
};
