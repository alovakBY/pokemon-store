import { handleActions } from "redux-actions";
import { LOCAL_STORAGE_KEYS } from "../../../constants/localStorageKeys";

import * as actions from "../actions";

const defaultState = {
    userData: {
        address: {},
        phone: "",
        email: "",
        firstName: "",
        lastName: "",
        gender: "",
    },
    isLoading: false,
    errors: null,
    isAuth: false,
};

export const signInPageReducer = handleActions(
    {
        [actions.SIGN_IN_REQUEST]: (state) => {
            return {
                ...state,
                isLoading: true,
                errors: null,
            };
        },
        [actions.SIGN_IN_SUCCESS]: (state, { payload }) => {
            const { accessToken, ...userData } = payload.response;
            localStorage.setItem(
                LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
                payload.response.accessToken
            );
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                userData,
            };
        },
        [actions.SIGN_IN_FAIL]: (state, { payload }) => {
            return {
                ...state,
                isLoading: false,
                errors: payload.response.message,
            };
        },
    },
    defaultState
);
