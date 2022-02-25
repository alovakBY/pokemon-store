import { handleActions } from "redux-actions";
import { LOCAL_STORAGE_KEYS } from "../../../constants/localStorageKeys";

import * as actions from "../actions";

const defaultState = {
    userData: null,
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
            const {
                accessToken,
                firstName,
                lastName,
                email,
                phone,
                gender,
                address: { city, country, addressLine1, addressLine2 },
            } = payload.response;
            localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                userData: {
                    "First Name": firstName,
                    "Last Name": lastName,
                    Email: email,
                    Phone: phone,
                    Gender: gender,
                    City: city,
                    Country: country,
                    "Address Line 1": addressLine1,
                    "Address Line 2": addressLine2,
                },
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
