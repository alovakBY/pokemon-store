import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { LocalMall } from "@mui/icons-material";
import { memo, useEffect } from "react";

import { useCart } from "../../../../hooks/useCart";

import { CartContainer } from "../../../../pages/cart/containers/CartContainer";

import { ROUTE_NAMES } from "../../../../routes/routeNames";
import { isAuthSelector } from "../../../../pages/signIn/selectors/isAuthSelector";

import classes from "../../Header.module.css";

export const CartButton = memo(() => {
    const [openCart, setOpenCart] = useState(false);
    const { cartInfo, getCartItems } = useCart();
    const { isAuth } = useSelector(isAuthSelector);

    const toggleDrawer = () => {
        setOpenCart(!openCart);
    };

    useEffect(() => {
        if (isAuth) {
            getCartItems();
        }
    }, [isAuth]);

    return (
        <div>
            <button
                to={ROUTE_NAMES.CART}
                className={classes.link}
                onClick={toggleDrawer}
            >
                <LocalMall />
                <span className={classes.cartQuantity}>
                    {cartInfo?.quantity}
                </span>
            </button>
            <CartContainer toggleDrawer={toggleDrawer} openCart={openCart} />
        </div>
    );
});
