import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
    pokemons: [],
    isLoading: false,
    errors: null,
};

export const pokemonsPageReducer = handleActions(
    {
        [actions.GET_POKEMONS_REQUEST]: (state) => ({
            ...state,
            isLoading: true,
            errors: null,
        }),
        [actions.GET_POKEMONS_SUCCESS]: (state, { payload }) => {
            return {
                ...state,
                isLoading: false,
                pokemons: [...payload.response],
            };
        },
        [actions.GET_POKEMONS_FAIL]: (state, { payload }) => ({
            ...state,
            isLoading: false,
            errors: payload.response.message,
        }),
    },
    defaultState
);
