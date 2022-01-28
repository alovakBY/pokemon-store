import { combineReducers } from "redux";

import { pokemonsReducer } from "../pages/pokemons/reducers";

export const rootReducer = combineReducers({
    pokemonsPage: pokemonsReducer,
});
