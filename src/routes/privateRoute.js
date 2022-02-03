import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";

export const PrivateRoute = () => {
    const { isAuth } = useSelector((state) => state.signInPage);

    return isAuth ? <Outlet /> : <Navigate to={ROUTE_NAMES.SIGN_IN} />;
};
