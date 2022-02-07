import { TextField } from "@mui/material";

import classes from "./SignIn.module.css";

export const SignIn = ({ formik }) => {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
    } = formik;

    return (
        <form>
            <div>
                <div className={classes.label}>Email address *</div>
                <TextField
                    type="text"
                    name="email"
                    label="email*"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    color="dark"
                    className={classes.input}
                />
                {touched.email && errors.email && (
                    <div className={classes.error}>{errors.email}</div>
                )}
            </div>
            <div>
                <div className={classes.label}>Password *</div>
                <TextField
                    autoComplete="true"
                    type="password"
                    name="password"
                    label="password*"
                    variant="outlined"
                    color="dark"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className={classes.input}
                />
                {touched.password && errors.password && (
                    <div className={classes.error}>{errors.password}</div>
                )}
            </div>
            <button
                disabled={!isValid || !dirty}
                onClick={handleSubmit}
                type="submit"
                className={classes.button}
            >
                Sign in
            </button>
        </form>
    );
};
