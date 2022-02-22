import { Account } from "../Account";

import classes from "./Account.module.css";

export const AccountLayout = ({ userData }) => {
    return (
        <>
            <div className={classes.title}>
                <span>My account</span>
            </div>
            <div className={classes.marginTop}>
                <Account userData={userData} />
            </div>
        </>
    );
};
