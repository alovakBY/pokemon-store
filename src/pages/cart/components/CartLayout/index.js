import { Box, Drawer, List } from "@mui/material";

import { Card } from "../Card";

import close from "../../../../static/images/close-cart.svg";

export const CartLayout = ({
    cartInfo,
    cartLoading,
    clickedPokemonId,
    toggleDrawer,
    openCart,
}) => {
    const cardsList = cartInfo?.itemsList.map(({ id, name, image, price }) => (
        <Card
            key={id}
            id={id}
            name={name}
            image={image}
            price={price}
            cartLoading={clickedPokemonId === id ? cartLoading : false}
        />
    ));

    return (
        <div>
            <Drawer anchor={"right"} open={openCart} onClose={toggleDrawer}>
                <div>
                    <h3>Shopping Cart</h3>
                    <img src={close} onClick={toggleDrawer} />
                </div>
                <Box sx={{ width: 400 }} role="presentation">
                    <List>{cardsList}</List>
                </Box>
            </Drawer>
        </div>
    );
};
