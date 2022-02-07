import { Formik } from "formik";

import { SignIn } from "../SignIn";
import { Spinner } from "../../../../commonComponents/Spinner";

import classes from "./SignInLayout.module.css";

export const SignInLayout = ({
  isLoading,
  errors,
  handleSignIn,
  validationsSchema,
}) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <div className={classes.signIn}>
      <div className={classes.title}>Sign in</div>
      {errors && <div className={classes.errors}>{errors}</div>}
      <div className={classes.form}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validateOnBlur
          validationSchema={validationsSchema}
          onSubmit={({ email, password }) => handleSignIn(email, password)}
        >
          {(formik) => <SignIn formik={formik} />}
        </Formik>
      </div>
    </div>
  );
};
