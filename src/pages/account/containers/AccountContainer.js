import { useSelector } from "react-redux";
import { orderSeletor } from "../../orders/selectors";
import { isAuthSelector } from "../../signIn/selectors/isAuthSelector";
import { AccountLayout } from "../components/AccountLayout";

export const AccountContainer = () => {
    const { userData } = useSelector(isAuthSelector);
    const { orders } = useSelector(orderSeletor);
    console.log(orders);
    console.log(userData);
    return (
        <div>
            <AccountLayout userData={userData} />
        </div>
    );
};
