import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { SignIn } from "../components/SignIn";

import * as actions from "../actions";
import { isAuthSelector } from "../selectors/isAuthSelector";
import { ROUTE_NAMES } from "../../../routes/routeNames";

export const SignInPageContainer = () => {
    const { isAuth } = useSelector(isAuthSelector);
    const { errors } = useSelector((state) => state.signInPage);
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
    // console.log(errors);
    useEffect(() => {
        if (isAuth) {
            navigate(ROUTE_NAMES.POKEMONS);
        }
    }, [isAuth]);
    return (
        <>
            <SignIn handleSignIn={handleSignIn} />
        </>
    );
};
