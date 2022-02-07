import * as yup from "yup";

import { VALIDATIONS_ERRORS_MESSAGES } from "./validationsErrorsMessages";

export const VALIDATIONS_SCHEMA = {
    email: yup
        .string()
        .email(VALIDATIONS_ERRORS_MESSAGES.EMAIL)
        .required(VALIDATIONS_ERRORS_MESSAGES.REQUIRED),
    password: yup.string().required(VALIDATIONS_ERRORS_MESSAGES.REQUIRED),
    gender: yup.string().required(VALIDATIONS_ERRORS_MESSAGES.REQUIRED),
    passwordForRegister: yup
        .string()
        .min(6, "Password is too short - should be 6 chars minimum.")
        .matches("(?=.*[A-Z])(?=.*[0-9])", "1 letter and 1 cifra")
        .required("required"),
};
