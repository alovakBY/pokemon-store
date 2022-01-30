import { useDispatch } from "react-redux";

import { Login } from "../components/Login";

import * as actions from "../actions";

export const LoginPageContainer = () => {
  const dispatch = useDispatch();
  const handleSignIn = (event, email, password) => {
    event.preventDefault();
    dispatch(
      actions.SIGN_IN_REQUEST({
        email,
        password,
      })
    );
  };
  return (
    <div>
      <Login handleSignIn={handleSignIn} />
    </div>
  );
};
