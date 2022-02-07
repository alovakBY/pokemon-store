import { handleActions } from "redux-actions";
// import { LOCAL_STORAGE_KEYS } from "../../../constants/localStorageKeys";

import * as actions from "../actions";

const defaultState = {
    response: {},
    isLoading: false,
    errors: null,
    //  isAuth: false,
};

export const signUpPageReducer = handleActions(
    {
        [actions.SIGN_UP_REQUEST]: (state, { payload }) => {
            console.log(payload);
            return state;
        },
        [actions.SIGN_UP_SUCCESS]: (state, { payload }) => {
            console.log(payload);
            return state;
        },
        [actions.SIGN_UP_FAIL]: (state, { payload }) => {
            console.log(payload);
            return state;
        },
    },
    defaultState
);
