import { Formik, Field } from "formik";
import * as yup from "yup";
import { TextField, FormControl } from "@mui/material";
import { useSelector } from "react-redux";

import { Spinner } from "../../../../commonComponents/Spinner";

import { isAuthSelector } from "../../../signIn/selectors/isAuthSelector";

export const SignUp = () => {
    const { isLoading, errors } = useSelector(isAuthSelector);
    const validationsSchema = yup.object().shape({
        email: yup.string().email("Enter correct email").required("required"),
        password: yup
            .string()
            .min(6, "Password is too short - should be 6 chars minimum.")
            .matches("(?=.*[A-Z])(?=.*[0-9])", "1 letter and 1 cifra")
            .required("required"),
        gender: yup.string().required("required"),
    });

    return isLoading ? (
        <Spinner />
    ) : (
        <div>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    gender: "",
                }}
                validateOnBlur
                validationSchema={validationsSchema}
                onSubmit={(values) => console.log(values)}
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
                                <p style={{ color: "red" }}>
                                    {errors.password}
                                </p>
                            )}
                        </div>
                        <div>
                            male:{" "}
                            <Field
                                type={"radio"}
                                value={"male"}
                                name="gender"
                            />
                            female:
                            <Field
                                type={"radio"}
                                value={"female"}
                                name="gender"
                            />
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
