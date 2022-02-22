import { NavLink } from "react-router-dom";
import { Box, Drawer } from "@mui/material";

import { Card } from "../Card";

import { ROUTE_NAMES } from "../../../../routes/routeNames";

import close from "../../../../static/images/close-cart.svg";
import emptyCart from "../../../../static/images/empty-cart.svg";

import classes from "./CartLayout.module.css";

export const CartLayout = ({
    cartInfo,
    cartLoading,
    clickedPokemonId,
    toggleDrawer,
    openCart,
    deleteCartItem,
}) => {
    const cardsList = cartInfo.itemsList.map(
        ({ id, name, image, price, quantity }) => (
            <Card
                key={id}
                id={id}
                name={name}
                image={image}
                price={price}
                quantity={quantity}
                cartLoading={clickedPokemonId === id ? cartLoading : false}
                deleteCartItem={deleteCartItem}
            />
        )
    );

    return (
        <>
            <Drawer anchor={"right"} open={openCart} onClose={toggleDrawer}>
                <div className={classes.top}>
                    <h3 className={classes.title}>Shopping Cart</h3>
                    <img
                        src={close}
                        alt="close"
                        onClick={toggleDrawer}
                        className={classes.close}
                    />
                </div>
                <Box className={classes.box} role="presentation">
                    <div className={classes.shadow}>
                        {cardsList.length === 0 ? (
                            <div className={classes.empty}>
                                <div className={classes.emptyImg}>
                                    <img src={emptyCart} alt="empty" />
                                </div>
                                <div>No products in the card.</div>
                            </div>
                        ) : (
                            <div className={classes.overflow}>{cardsList}</div>
                        )}
                    </div>
                </Box>
                <div className={classes.buttonWrapper}>
                    <NavLink
                        to={ROUTE_NAMES.ORDERS}
                        onClick={toggleDrawer}
                        className={`${classes.button} ${
                            cardsList.length === 0 ? classes.disabled : ""
                        }`}
                    >
                        <span className={classes.buttonText}>
                            Proceed To Checkout
                        </span>
                        <span className={classes.totalPrice}>
                            ${cartInfo.totalPrice}
                        </span>
                    </NavLink>
                </div>
            </Drawer>
        </>
    );
};
