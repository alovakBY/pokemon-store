import {
    TextField,
    OutlinedInput,
    InputAdornment,
    IconButton,
    InputLabel,
    FormControl,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

import { Button } from "../../../../commonComponents/Button";

import classes from "./SignIn.module.css";
import { useState } from "react";

export const SignIn = ({ formik }) => {
    const [showPassword, setShowPassword] = useState(false);
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
                <div className={classes.label}>Email*</div>
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
                <div className={classes.label}>Password*</div>
                <FormControl variant="outlined" className={classes.input}>
                    <InputLabel htmlFor="outlined-adornment-password">
                        password*
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        value={values.password}
                        color="dark"
                        label="password*"
                        onChange={handleChange("password")}
                        onBlur={handleBlur("password")}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                {touched.password && errors.password && (
                    <div className={classes.error}>{errors.password}</div>
                )}
            </div>
            <div className={classes.buttonWrapper}>
                <Button
                    disabled={!isValid || !dirty}
                    callback={handleSubmit}
                    text={"Sign in"}
                    type={"submit"}
                />
            </div>
        </form>
    );
};
