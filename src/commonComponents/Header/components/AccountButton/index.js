import { NavLink } from "react-router-dom";
import { Face } from "@mui/icons-material";

import { ROUTE_NAMES } from "../../../../routes/routeNames";

import classes from "../../Header.module.css";

export const AccountButton = () => {
    return (
        <NavLink
            to={ROUTE_NAMES.ACCOUNT}
            className={({ isActive }) => {
                return `${classes.link} ${isActive && classes.active}`;
            }}
        >
            <Face sx={{ fontSize: "32px" }} />
        </NavLink>
    );
};
