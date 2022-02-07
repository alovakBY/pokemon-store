import { handleActions } from "redux-actions";
// import { LOCAL_STORAGE_KEYS } from "../../../constants/localStorageKeys";

import * as actions from "../actions";

const defaultState = {
  response: "",
  isLoading: false,
  errors: null,
  //  isAuth: false,
};

export const signUpPageReducer = handleActions(
  {
    [actions.SIGN_UP_REQUEST]: (state) => {
      return {
        ...state,
        response: "",
        isLoading: true,
      };
    },
    [actions.SIGN_UP_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        response: payload.response.message,
      };
    },
    [actions.SIGN_UP_FAIL]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        errors: payload.response.message,
      };
    },
  },
  defaultState
);
