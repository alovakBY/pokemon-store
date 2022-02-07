import { Header } from "../Header";

import classes from "./mainLayout.module.css";

export const MainLayout = ({ children }) => {
    return (
        <div className={classes.main}>
            <Header />
            <>{children}</>
        </div>
    );
};
