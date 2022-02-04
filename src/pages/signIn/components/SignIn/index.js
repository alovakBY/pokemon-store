import { Formik } from "formik";
import * as yup from "yup";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

// import classes from "./index.module.css";

const useStyles = makeStyles((theme) => ({
    formLabel: {
        color: "green",
    },
}));

export const SignIn = ({ handleSignIn }) => {
    const validationsSchema = yup.object().shape({
        email: yup.string().email("Enter correct email").required("required"),
        password: yup.string().required("required"),
    });

    const classes = useStyles();

    return (
        <>
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
                                // className={classes.formLabel}
                                type="text"
                                name="email"
                                label="email*"
                                variant="outlined"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                color="dark"
                            />
                            {touched.email && errors.email && (
                                <p>{errors.email}</p>
                            )}
                        </div>
                        <div>
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
                            />
                            {touched.password && errors.password && (
                                <p>{errors.password}</p>
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
        </>
    );
};
