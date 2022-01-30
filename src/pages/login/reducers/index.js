import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  token: null,
  isLoading: false,
  errors: null,
};

export const loginPageReducer = handleActions(
  {
    [actions.SIGN_IN_REQUEST]: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [actions.SIGN_IN_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        token: payload.response.accessToken,
      };
    },
    [actions.SIGN_IN_FAIL]: (state, payload) => {
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
    },
  },
  defaultState
);
