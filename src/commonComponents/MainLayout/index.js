import { Header } from "../Header";

import classes from "./mainLayout.module.css";

export const MainLayout = ({ children }) => {
    return (
        <div className={classes.container}>
            <Header />
            <div>{children}</div>
        </div>
    );
};
