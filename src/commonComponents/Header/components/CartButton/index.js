import { NavLink } from "react-router-dom";
import { LocalMall } from "@mui/icons-material";
import { memo, useEffect } from "react";

import { useCart } from "../../../../hooks/useCart";

import { ROUTE_NAMES } from "../../../../routes/routeNames";

import classes from "../../Header.module.css";

export const CartButton = memo(() => {
    const { cartInfo, isCart, getCartItems } = useCart();

    console.log(cartInfo.itemsList.length);
    // console.log(isCart);

    useEffect(() => {
        if (!isCart) {
            getCartItems();
        }
    }, []);

    return (
        <NavLink
            to={ROUTE_NAMES.CART}
            className={({ isActive }) => {
                return `${classes.link} ${isActive && classes.active}`;
            }}
        >
            <LocalMall />
        </NavLink>
    );
});
