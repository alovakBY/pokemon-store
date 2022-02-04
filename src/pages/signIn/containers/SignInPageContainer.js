import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { SignInLayout } from "../components/SignInLayout";
import { Spinner } from "../../../commonComponents/Spinner";

import * as actions from "../actions";
import { isAuthSelector } from "../selectors/isAuthSelector";
import { ROUTE_NAMES } from "../../../routes/routeNames";

export const SignInPageContainer = () => {
    const { isAuth, isLoading, errors } = useSelector(isAuthSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSignIn = (email, password) => {
        dispatch(
            actions.SIGN_IN_REQUEST({
                email,
                password,
            })
        );
    };
    useEffect(() => {
        if (isAuth) {
            navigate(ROUTE_NAMES.POKEMONS);
        }
    }, [isAuth]);
    return (
        <SignInLayout
            isLoading={isLoading}
            errors={errors}
            handleSignIn={handleSignIn}
        />
    );
};
