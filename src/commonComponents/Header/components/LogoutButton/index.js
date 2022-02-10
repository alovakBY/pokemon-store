import { Logout } from "@mui/icons-material";

import authService from "../../../../services/authService";

import classes from "../../Header.module.css";

export const LogoutButton = () => {
    return (
        <div
            className={`${classes.link} ${classes.logout}`}
            onClick={() => authService.signOut()}
        >
            <Logout />
            <span>Logout</span>
        </div>
    );
};
