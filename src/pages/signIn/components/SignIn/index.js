import { Formik } from "formik";
import * as yup from "yup";
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { Spinner } from "../../../../commonComponents/Spinner";

import { isAuthSelector } from "../../selectors/isAuthSelector";
import { ROUTE_NAMES } from "../../../../routes/routeNames";

export const SignIn = ({ handleSignIn }) => {
    const { isLoading, errors } = useSelector(isAuthSelector);
    const validationsSchema = yup.object().shape({
        email: yup.string().email("Enter correct email").required("required"),
        password: yup.string().required("required"),
    });

    return isLoading ? (
        <Spinner />
    ) : (
        <div>
            <div>
                Don't have an account?{" "}
                <NavLink to={ROUTE_NAMES.SIGN_UP}>Sign UP</NavLink>
            </div>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validateOnBlur
                validationSchema={validationsSchema}
                onSubmit={({ email, password }) =>
                    handleSignIn(email, password)
                }
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    isValid,
                    handleSubmit,
                    dirty,
                }) => (
                    <form>
                        <div>
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
                                <p style={{ color: "red" }}>
                                    {errors.password}
                                </p>
                            )}
                        </div>
                        <button
                            disabled={!isValid || !dirty}
                            onClick={handleSubmit}
                            type="submit"
                        >
                            Send
                        </button>
                    </form>
                )}
            </Formik>
            {errors && <div style={{ color: "red" }}>{errors}</div>}
        </div>
    );
};
