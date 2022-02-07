import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { SignUpLayout } from "../components/SignUpLayout.js";

import { isAuthSelector } from "../../signIn/selectors/isAuthSelector";
import { ROUTE_NAMES } from "../../../routes/routeNames";
import * as actions from "../actions";
import { VALIDATIONS_SCHEMA } from "../../../constants/validations.js";

export const SignUpPageContainer = () => {
    const { isAuth, isLoading, errors } = useSelector(isAuthSelector);

    const validationsSchema = yup.object().shape({
        email: VALIDATIONS_SCHEMA.email,
        password: VALIDATIONS_SCHEMA.passwordForRegister,
        gender: VALIDATIONS_SCHEMA.gender,
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) {
            navigate(ROUTE_NAMES.POKEMONS);
        }
    }, [isAuth]);

    const handleSignUp = (values) => {
        console.log(values);
    };

    return (
        <SignUpLayout
            handleSignUp={handleSignUp}
            isLoading={isLoading}
            errors={errors}
            validationsSchema={validationsSchema}
        />
    );
};
