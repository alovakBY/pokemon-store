import * as yup from "yup";

import { VALIDATIONS_ERRORS_MESSAGES } from "./validationsErrorsMessages";

export const VALIDATIONS_SCHEMA = {
  email: yup
    .string()
    .max(20, VALIDATIONS_ERRORS_MESSAGES.MAXIMUM)
    .email(VALIDATIONS_ERRORS_MESSAGES.EMAIL)
    .required(VALIDATIONS_ERRORS_MESSAGES.REQUIRED),
  password: yup
    .string()
    .max(20, VALIDATIONS_ERRORS_MESSAGES.MAXIMUM)
    .required(VALIDATIONS_ERRORS_MESSAGES.REQUIRED),
  gender: yup
    .string()
    .max(20, VALIDATIONS_ERRORS_MESSAGES.MAXIMUM)
    .required(VALIDATIONS_ERRORS_MESSAGES.REQUIRED),
  passwordForRegister: yup
    .string()
    .min(6, VALIDATIONS_ERRORS_MESSAGES.MIN_PASSWORD)
    .max(20, VALIDATIONS_ERRORS_MESSAGES.MAXIMUM)
    .matches(/(?=.*[A-Z])(?=.*[0-9])/, VALIDATIONS_ERRORS_MESSAGES.PASSWORD)
    .required(VALIDATIONS_ERRORS_MESSAGES.REQUIRED),
  phone: yup
    .string()
    .max(20, VALIDATIONS_ERRORS_MESSAGES.MAXIMUM)
    .matches(
      /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/,
      VALIDATIONS_ERRORS_MESSAGES.PHONE
    )
    .required(VALIDATIONS_ERRORS_MESSAGES.REQUIRED),
  firstName: yup
    .string()
    .max(20, VALIDATIONS_ERRORS_MESSAGES.MAXIMUM)
    .required(VALIDATIONS_ERRORS_MESSAGES.REQUIRED),
  lastName: yup
    .string()
    .max(20, VALIDATIONS_ERRORS_MESSAGES.MAXIMUM)
    .required(VALIDATIONS_ERRORS_MESSAGES.REQUIRED),
  maximum: yup.string().max(20, VALIDATIONS_ERRORS_MESSAGES.MAXIMUM),
};
