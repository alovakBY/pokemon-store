import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
    message: "",
    isLoading: false,
    errors: null,
    success: false,
    email: "",
    password: "",
};

export const signUpPageReducer = handleActions(
    {
        [actions.SIGN_UP_REQUEST]: (state) => {
            return {
                ...state,
                message: "",
                success: false,
                isLoading: true,
            };
        },
        [actions.SIGN_UP_SUCCESS]: (state, { payload }) => {
            console.log(payload);
            return {
                ...state,
                isLoading: false,
                message: payload.response.message,
                success: payload.response.success,
                email: payload.actionPayload.email,
                password: payload.actionPayload.password,
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
