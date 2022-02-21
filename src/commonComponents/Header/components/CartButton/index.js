import { useState } from "react";
import { LocalMall } from "@mui/icons-material";
import { memo } from "react";

import { useCart } from "../../../../hooks/useCart";

import { CartContainer } from "../../../../pages/cart/containers/CartContainer";

import classes from "../../Header.module.css";

export const CartButton = memo(() => {
    const [openCart, setOpenCart] = useState(false);
    const { cartInfo } = useCart();

    const toggleDrawer = () => {
        setOpenCart(!openCart);
    };

    return (
        <div>
            <button
                className={`${classes.link} ${classes.cart}`}
                onClick={toggleDrawer}
            >
                <LocalMall />
                <span className={classes.cartQuantity}>
                    {cartInfo.quantity}
                </span>
            </button>
            <CartContainer toggleDrawer={toggleDrawer} openCart={openCart} />
        </div>
    );
});
