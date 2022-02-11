import {
    TextField,
    RadioGroup,
    Radio,
    FormControlLabel,
    FormLabel,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from "@mui/material";

import { VisibilityOff, Visibility } from "@mui/icons-material";

import { ButtonSubmit } from "../../../../commonComponents/ButtonSubmit";

import classes from "./SignUp.module.css";
import { useState } from "react";

export const SignUp = ({ formik }) => {
    const [showPassword, setShowPassword] = useState(false);
    const {
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
        isValid,
        dirty,
        handleSubmit,
    } = formik;
    return (
        <form>
            <div>
                <div className={classes.label}>Email*</div>
                <TextField
                    className={classes.input}
                    color="dark"
                    type="text"
                    name="email"
                    label="email*"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
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

            <div>
                <div className={classes.label}>First name*</div>
                <TextField
                    className={classes.input}
                    color="dark"
                    type="text"
                    name="firstName"
                    label="first name*"
                    variant="outlined"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.firstName && errors.firstName && (
                    <div className={classes.error}>{errors.firstName}</div>
                )}
            </div>

            <div>
                <div className={classes.label}>Last name*</div>
                <TextField
                    className={classes.input}
                    color="dark"
                    type="text"
                    name="lastName"
                    label="last name*"
                    variant="outlined"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.lastName && errors.lastName && (
                    <div className={classes.error}>{errors.lastName}</div>
                )}
            </div>

            <div>
                <div className={classes.label}>Country</div>
                <TextField
                    className={classes.input}
                    color="dark"
                    type="text"
                    name="country"
                    label="country"
                    variant="outlined"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.country && (
                    <div className={classes.error}>{errors.country}</div>
                )}
            </div>

            <div>
                <div className={classes.label}>City</div>
                <TextField
                    className={classes.input}
                    color="dark"
                    type="text"
                    name="city"
                    label="city"
                    variant="outlined"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.city && (
                    <div className={classes.error}>{errors.city}</div>
                )}
            </div>

            <div>
                <div className={classes.label}>Address Line 1</div>
                <TextField
                    className={classes.input}
                    color="dark"
                    type="text"
                    name="addressLine1"
                    label="address Line 1"
                    variant="outlined"
                    value={values.addressLine1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.addressLine1 && (
                    <div className={classes.error}>{errors.addressLine1}</div>
                )}
            </div>

            <div>
                <div className={classes.label}>Address Line 2</div>
                <TextField
                    className={classes.input}
                    color="dark"
                    type="text"
                    name="addressLine2"
                    label="address Line 2"
                    variant="outlined"
                    value={values.addressLine2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.addressLine2 && (
                    <div className={classes.error}>{errors.addressLine2}</div>
                )}
            </div>

            <div>
                <FormLabel
                    className={classes.label}
                    id="demo-row-radio-buttons-group-label"
                >
                    Gender
                </FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="gender"
                >
                    <FormControlLabel
                        control={<Radio />}
                        checked={values.gender === "male"}
                        value="male"
                        label="male"
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        control={<Radio />}
                        checked={values.gender === "female"}
                        value="female"
                        label="female"
                        onChange={handleChange}
                    />
                </RadioGroup>
            </div>
            <div>
                <div className={classes.label}>Phone*</div>
                <TextField
                    className={classes.input}
                    color="dark"
                    type="tel"
                    name="phone"
                    label="phone*"
                    variant="outlined"
                    autoComplete="true"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.phone && errors.phone && (
                    <div className={classes.error}>{errors.phone}</div>
                )}
            </div>
            <ButtonSubmit
                className={classes.button}
                disabled={!isValid || !dirty}
                callback={handleSubmit}
                text={"Sign up"}
                type={"submit"}
            />
        </form>
    );
};
