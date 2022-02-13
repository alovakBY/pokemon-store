import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { SignInLayout } from "../components/SignInLayout";

import * as actions from "../actions";
import { isAuthSelector } from "../selectors/isAuthSelector";
import { ROUTE_NAMES } from "../../../routes/routeNames";
import { VALIDATIONS_SCHEMA } from "../../../constants/validations";

export const SignInPageContainer = () => {
  const { isAuth, isLoading, errors } = useSelector(isAuthSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationsSchema = yup.object().shape({
    email: VALIDATIONS_SCHEMA.email,
    password: VALIDATIONS_SCHEMA.password,
  });

  useEffect(() => {
    if (isAuth) {
      navigate(ROUTE_NAMES.POKEMONS);
    }
  }, [isAuth, navigate]);

  useEffect(() => {
    return () => {};
  }, []);

  const handleSignIn = (email, password) => {
    dispatch(
      actions.SIGN_IN_REQUEST({
        email,
        password,
      })
    );
  };

  return (
    <SignInLayout
      isLoading={isLoading}
      errors={errors}
      validationsSchema={validationsSchema}
      handleSignIn={handleSignIn}
    />
  );
};
