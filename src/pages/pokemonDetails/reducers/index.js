import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  pokemonDetails: {},
  isLoading: false,
  errors: null,
};

export const pokemonDetailsPageReducer = handleActions(
  {
    [actions.GET_POKEMON_DETAILS_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_POKEMON_DETAILS_SUCCESS]: (state, { payload }) => {
      // console.log(payload.response);
      return {
        ...state,
        isLoading: false,
        pokemonDetails: payload.response,
      };
    },
    [actions.GET_POKEMON_DETAILS_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload,
    }),
  },
  defaultState
);
