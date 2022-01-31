import { combineReducers } from "redux";
import { createBlacklistFilter } from "redux-persist-transform-filter";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { pokemonDetailsPageReducer } from "../pages/pokemonDetails/reducers";
import { pokemonsPageReducer } from "../pages/pokemons/reducers";
import { loginPageReducer } from "../pages/login/reducers";

const authBlackListedFields = createBlacklistFilter("loginPage", [
    "isLoading",
    "errors",
    "userData",
]);

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["loginPage"],
    transforms: [authBlackListedFields],
};

const rootReducer = combineReducers({
    pokemonsPage: pokemonsPageReducer,
    pokemonDetailsPage: pokemonDetailsPageReducer,
    loginPage: loginPageReducer,
});

export default persistReducer(persistConfig, rootReducer);
