import { Box, Drawer, List } from "@mui/material";

import { Card } from "../Card";

import close from "../../../../static/images/close-cart.svg";

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
                        onClick={toggleDrawer}
                        className={classes.close}
                    />
                </div>
                <Box className={classes.box} role="presentation">
                    <div className={classes.shadow}>
                        <div className={classes.overflow}>{cardsList}</div>
                    </div>
                </Box>
            </Drawer>
        </>
    );
};
