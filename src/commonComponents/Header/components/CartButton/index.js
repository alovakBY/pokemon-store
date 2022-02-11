import { NavLink } from "react-router-dom";
import { LocalMall } from "@mui/icons-material";
import { memo } from "react";

import { useCart } from "../../../../hooks/useCart";

import { ROUTE_NAMES } from "../../../../routes/routeNames";

import classes from "../../Header.module.css";

export const CartButton = memo(() => {
    const { cartInfo, isCart } = useCart();

    return (
        <NavLink
            to={ROUTE_NAMES.CART}
            className={({ isActive }) => {
                return `${classes.link} ${isActive && classes.active}`;
            }}
        >
            <LocalMall />
            {isCart && (
                <span className={classes.cartQuantity}>
                    {cartInfo.quantity}
                </span>
            )}
        </NavLink>
    );
});
