import { Field } from "formik";
import { TextField } from "@mui/material";

export const SignUp = ({ formik }) => {
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
                email: <br />
                <TextField
                    type="text"
                    name="email"
                    label="email*"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                {touched.email && errors.email && (
                    <p style={{ color: "red" }}>{errors.email}</p>
                )}
            </div>
            <div>
                password: <br />
                <TextField
                    autoComplete="true"
                    type="password"
                    name="password"
                    label="password*"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />
                {touched.password && errors.password && (
                    <p style={{ color: "red" }}>{errors.password}</p>
                )}
            </div>
            <div>
                male: <Field type={"radio"} value={"male"} name="gender" />
                female:
                <Field type={"radio"} value={"female"} name="gender" />
            </div>
            <button
                disabled={!isValid || !dirty}
                onClick={handleSubmit}
                type="submit"
            >
                Sign Up
            </button>
        </form>
    );
};
