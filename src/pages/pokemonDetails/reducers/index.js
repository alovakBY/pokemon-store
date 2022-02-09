import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
    pokemonInfo: {},
    isLoading: false,
    errors: null,
};

export const pokemonDetailsPageReducer = handleActions(
    {
        [actions.GET_POKEMON_DETAILS_REQUEST]: (state) => ({
            ...state,
            isLoading: true,
            errors: null,
        }),
        [actions.GET_POKEMON_DETAILS_SUCCESS]: (state, { payload }) => {
            return {
                ...state,
                isLoading: false,
                pokemonInfo: payload.response,
            };
        },
        [actions.GET_POKEMON_DETAILS_FAIL]: (state, { payload }) => ({
            ...state,
            isLoading: false,
            errors: payload.response.message,
        }),
    },
    defaultState
);
