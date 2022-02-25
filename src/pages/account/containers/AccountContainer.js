import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { Account } from "../components/Account";
import { Button } from "../../../commonComponents/Button";

import { isAuthSelector } from "../../signIn/selectors/isAuthSelector";
import { ROUTE_NAMES } from "../../../routes/routeNames";

import classes from "./AccountContainer.module.css";

export const AccountContainer = () => {
    const { userData } = useSelector(isAuthSelector);
    return (
        <div>
            <Account userData={userData} />
            <NavLink to={ROUTE_NAMES.ORDERS} className={classes.button}>
                <Button text="My orders" />
            </NavLink>
        </div>
    );
};
