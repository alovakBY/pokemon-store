import { CircularProgress } from "@mui/material";

import classes from "./Spinner.module.css";

export const Spinner = () => {
    return (
        <div className={classes.container}>
            <CircularProgress className={classes.spinner} />
        </div>
    );
};
