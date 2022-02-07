import { Formik } from "formik";

import { Spinner } from "../../../../commonComponents/Spinner";

import { SignUp } from "../SignUp";

export const SignUpLayout = ({
    handleSignUp,
    isLoading,
    errors,
    validationsSchema,
}) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <div>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    gender: "male",
                }}
                validateOnBlur
                validationSchema={validationsSchema}
                onSubmit={(values) => console.log(values)}
            >
                {(formik) => <SignUp formik={formik} />}
            </Formik>
            {errors && <div style={{ color: "red" }}>{errors}</div>}
        </div>
    );
};
