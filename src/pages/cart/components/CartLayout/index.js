import { Box, Drawer, List } from "@mui/material";

import { Card } from "../Card";

import close from "../../../../static/images/close-cart.svg";

export const CartLayout = ({ toggleDrawer, openCart, cartInfo }) => {
    const { itemsList } = cartInfo;

    const cardsList = itemsList.map(({ id, name, image, price }) => (
        <Card key={id} id={id} name={name} image={image} price={price} />
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
