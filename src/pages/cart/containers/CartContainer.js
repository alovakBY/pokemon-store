import { Box, Drawer, List } from "@mui/material";

import { useCart } from "../../../hooks/useCart";

export const CartContainer = ({ toggleDrawer, openCart }) => {
  const list = (
    <Box sx={{ width: 400 }} role="presentation">
      <List>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor={"right"} open={openCart} onClose={toggleDrawer}>
        <button onClick={toggleDrawer}>close</button>
        {list}
      </Drawer>
    </div>
  );
};
