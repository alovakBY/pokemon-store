import { useCart } from "../../../hooks/useCart";

import { CartLayout } from "../components/CartLayout";

export const CartContainer = ({ toggleDrawer, openCart }) => {
    const { cartLoading, cartInfo, clickedPokemonId } = useCart();
    return (
        <div>
            <CartLayout
                cartInfo={cartInfo}
                cartLoading={cartLoading}
                clickedPokemonId={clickedPokemonId}
                toggleDrawer={toggleDrawer}
                openCart={openCart}
            />
        </div>
    );
};
