import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { SignUpLayout } from "../components/SignUpLayout.js";

import { isAuthSelector } from "../../signIn/selectors/isAuthSelector";
import { signUpPageSelector } from "../../signUp/selectors";
import { ROUTE_NAMES } from "../../../routes/routeNames";
import * as actions from "../actions";
import { SIGN_IN_REQUEST } from "../../signIn/actions";
import { VALIDATIONS_SCHEMA } from "../../../constants/validations.js";

export const SignUpPageContainer = () => {
    const { isAuth } = useSelector(isAuthSelector);
    const { success, email, password, isLoading, errors } =
        useSelector(signUpPageSelector);

    const validationsSchema = yup.object().shape({
        email: VALIDATIONS_SCHEMA.email,
        firstName: VALIDATIONS_SCHEMA.firstName,
        lastName: VALIDATIONS_SCHEMA.lastName,
        country: VALIDATIONS_SCHEMA.maximum,
        city: VALIDATIONS_SCHEMA.maximum,
        addressLine1: VALIDATIONS_SCHEMA.maximum,
        addressLine2: VALIDATIONS_SCHEMA.maximum,
        password: VALIDATIONS_SCHEMA.passwordForRegister,
        gender: VALIDATIONS_SCHEMA.gender,
        phone: VALIDATIONS_SCHEMA.phone,
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) {
            navigate(ROUTE_NAMES.POKEMONS);
        }
    }, [isAuth]);

    useEffect(() => {
        if (success) {
            dispatch(SIGN_IN_REQUEST({ email, password }));
        }
    }, [success]);

    const handleSignUp = ({
        country,
        city,
        addressLine1,
        addressLine2,
        ...values
    }) => {
        const newUser = {
            ...values,
            address: {
                country,
                city,
                addressLine1,
                addressLine2,
            },
        };
        dispatch(actions.SIGN_UP_REQUEST(newUser));
    };

    return (
        <SignUpLayout
            isLoading={isLoading}
            errors={errors}
            handleSignUp={handleSignUp}
            validationsSchema={validationsSchema}
        />
    );
};
