import classes from "./Account.module.css";

export const Account = ({ userData }) => {
    const { firstName, lastName, email, phone, address } = userData;
    return (
        <div className={classes.account}>
            <div className={classes.hello}>
                <div>
                    Hello, <span>{userData.firstName}</span>!
                </div>
                <div>First name: {firstName}</div>
                <div>Last name: {lastName}</div>
                <div>Email: {email}</div>
                <div>Phone: {phone}</div>
                <div>Country: {address.country}</div>
                <div>City: {address.city}</div>
                <div>Address Line 1: {address.addressLine1}</div>
                <div>Address Line 2: {address.addressLine2}</div>
            </div>
        </div>
    );
};
