import { NavLink } from "react-router-dom";
import { Storefront } from "@mui/icons-material";

import { ROUTE_NAMES } from "../../../../routes/routeNames";

import classes from "../../Header.module.css";

export const StoreButton = () => {
    return (
        <NavLink
            to={ROUTE_NAMES.POKEMONS}
            className={({ isActive }) => {
                return `${classes.link} ${isActive && classes.active}`;
            }}
        >
            <Storefront sx={{ fontSize: "32px" }} />
        </NavLink>
    );
};
