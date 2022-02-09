import { useEffect } from "react";
import { useCart } from "../../../hooks/useCart";

export const CartContainer = () => {
    const { getCartItems } = useCart();

    useEffect(() => {
        getCartItems();
    }, []);
    return <div>CartContainer</div>;
};
