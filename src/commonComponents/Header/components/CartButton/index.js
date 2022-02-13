import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { LocalMall } from "@mui/icons-material";
import { memo, useEffect } from "react";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
// import List from "@mui/material/List";

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
        <span className={classes.cartQuantity}>{cartInfo?.quantity}</span>
      </button>
      <CartContainer toggleDrawer={toggleDrawer} openCart={openCart} />
    </div>
  );
});

// export default function TemporaryDrawer() {
//   const [openCart, setOpenCart] = React.useState(false);

//   const toggleDrawer = () => {
//     setOpenCart(!openCart);
//   };

//   const list = (
//     <Box sx={{ width: 250 }} role="presentation">
//       <List>
//         <div>1</div>
//         <div>2</div>
//         <div>3</div>
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       <React.Fragment key={"right"}>
//         <Button onClick={toggleDrawer}>{"right"}</Button>
//         <Drawer anchor={"right"} open={openCart} onClose={toggleDrawer}>
//           {list}
//         </Drawer>
//       </React.Fragment>
//     </div>
//   );
// }
