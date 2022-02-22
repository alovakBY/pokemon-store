import { useCart } from "../../../hooks/useCart";

import { OrdersLayout } from "../components/OrdersLayout";

export const OrdersContainer = () => {
    const { cartInfo } = useCart();
    console.log(cartInfo);
    return <OrdersLayout cartInfo={cartInfo} />;
};
