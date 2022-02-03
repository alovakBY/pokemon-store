import { NavLink } from "react-router-dom";

import { NAVIGATION } from "./config";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../../pages/signIn/selectors/isAuthSelector";
import { useMemo } from "react";
import authService from "../../services/authService";

export const Header = () => {
    const { isAuth } = useSelector(isAuthSelector);

    const navigationItems = useMemo(() => {
        const targetNavigationItems = isAuth ? "PRIVATE" : "PUBLIC";

        return NAVIGATION[targetNavigationItems];
    }, [isAuth]);

    return (
        <div style={{ marginBottom: 10 }}>
            {navigationItems.map(({ title, path }) => {
                return (
                    <NavLink key={title} to={path}>
                        {title}
                    </NavLink>
                );
            })}

            {isAuth && (
                <button onClick={() => authService.signOut()}>Logout</button>
            )}
        </div>
    );
};
