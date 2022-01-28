import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
    pokemons: [],
};

export const pokemonsReducer = handleActions(
    {
        [actions.GET_POKEMONS_ACTION]: (state, { payload }) => {
            return {
                ...state,
                pokemons: [...payload],
            };
        },
    },
    defaultState
);
