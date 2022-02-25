import classes from "./Account.module.css";

export const Account = ({ userData }) => {
    const userDataList = Object.keys(userData).map((dataItemKey, index) => {
        return (
            <tr key={index} className={classes.dataItem}>
                <td className={classes.dataItemTitle}>{dataItemKey}: </td>
                <td className={classes.dataItemText}>
                    {userData[dataItemKey]}
                </td>
            </tr>
        );
    });
    return (
        <>
            <div className={classes.title}>
                <span>My account</span>
            </div>
            <div className={classes.marginTop}>
                <table className={classes.account}>
                    <tbody>{userDataList}</tbody>
                </table>
            </div>
        </>
    );
};
