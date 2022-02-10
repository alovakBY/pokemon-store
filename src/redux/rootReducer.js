import { combineReducers } from "redux";
import { createBlacklistFilter } from "redux-persist-transform-filter";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { pokemonDetailsPageReducer } from "../pages/pokemonDetails/reducers";
import { pokemonsPageReducer } from "../pages/pokemons/reducers";
import { signInPageReducer } from "../pages/signIn/reducers";
import { signUpPageReducer } from "../pages/signUp/reducers";
import { cartReducer } from "../pages/cart/reducers";

const authBlackListedFields = createBlacklistFilter("signInPage", [
    "isLoading",
    "errors",
]);

const cartBlackListedFields = createBlacklistFilter("cart", [
    "isLoading",
    "errors",
]);

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["signInPage", "cart"],
    transforms: [authBlackListedFields, cartBlackListedFields],
};

const rootReducer = combineReducers({
    pokemonsPage: pokemonsPageReducer,
    pokemonDetailsPage: pokemonDetailsPageReducer,
    signInPage: signInPageReducer,
    signUpPage: signUpPageReducer,
    cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
