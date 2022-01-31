import { NavLink } from "react-router-dom";

import { NAVIGATION } from "./config";
import { ROUTE_NAMES } from "../../routes/routeNames";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../../pages/login/selectors/isAuthSelector";
import { useMemo } from "react";

export const Header = () => {
    const { isAuth } = useSelector(isAuthSelector);

    const navigationItems = useMemo(() => {
        const targetNavigationItems = isAuth ? "PRIVATE" : "PUBLIC";

        return NAVIGATION[targetNavigationItems];
    }, [isAuth]);

    return (
        <div>
            {navigationItems.map(({ title, path }) => {
                return (
                    <NavLink key={title} to={path}>
                        {title}
                    </NavLink>
                );
            })}
        </div>
    );
};
