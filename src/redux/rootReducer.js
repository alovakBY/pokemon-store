import { combineReducers } from "redux";

import { pokemonDetailsPageReducer } from "../pages/pokemonDetails/reducers";
import { pokemonsPageReducer } from "../pages/pokemons/reducers";
import { loginPageReducer } from "../pages/login/reducers";

export const rootReducer = combineReducers({
  pokemonsPage: pokemonsPageReducer,
  pokemonDetailsPage: pokemonDetailsPageReducer,
  loginPage: loginPageReducer,
});
