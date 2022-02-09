import { Formik } from "formik";

import { Spinner } from "../../../../commonComponents/Spinner";
import { SignUp } from "../SignUp";

import classes from "./SignUpLayout.module.css";

export const SignUpLayout = ({
  message,
  isLoading,
  errors,
  handleSignUp,
  validationsSchema,
}) => {
  return isLoading ? (
    <Spinner screen={true} />
  ) : message ? (
    <div className={classes.success}>{message}!!!</div>
  ) : (
    <div className={classes.signUp}>
      <div className={classes.title}>Sign Up</div>
      {errors && <div className={classes.errors}>{errors}</div>}
      <div className={classes.form}>
        <Formik
          initialValues={{
            email: "",
            firstName: "",
            lastName: "",
            country: "",
            city: "",
            addressLine1: "",
            addressLine2: "",
            gender: "male",
            password: "",
            phone: "",
          }}
          validateOnBlur
          validationSchema={validationsSchema}
          onSubmit={(values) => {
            handleSignUp(values);
          }}
        >
          {(formik) => <SignUp formik={formik} />}
        </Formik>
      </div>
    </div>
  );
};
