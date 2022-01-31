import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Login } from "../components/Login";

import * as actions from "../actions";
import { isAuthSelector } from "../selectors/isAuthSelector";
import { ROUTE_NAMES } from "../../../routes/routeNames";

export const LoginPageContainer = () => {
  const { isAuth } = useSelector(isAuthSelector);
  const { errors } = useSelector((state) => state.loginPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignIn = (event, email, password) => {
    event.preventDefault();
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
    <div>
      <Login handleSignIn={handleSignIn} />
    </div>
  );
};
