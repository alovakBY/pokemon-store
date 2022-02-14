import { useCart } from "../../../hooks/useCart";

import { CartLayout } from "../components/CartLayout";

export const CartContainer = ({ toggleDrawer, openCart }) => {
    const { cartInfo } = useCart();
    return (
        <div>
            <CartLayout
                cartInfo={cartInfo}
                toggleDrawer={toggleDrawer}
                openCart={openCart}
            />
        </div>
    );
};
