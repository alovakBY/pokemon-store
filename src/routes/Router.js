import { Routes, Route } from "react-router-dom";

import { PokemonsPageContainer } from "../pages/pokemons/containers/PokemonsPageContainer";
import { PokemonDetailsContainer } from "../pages/pokemonDetails/containers/PokemonDetailsContainer";
import { SignInPageContainer } from "../pages/signIn/containers/SignInPageContainer";
import { CartContainer } from "../pages/cart/containers/CartContainer";

import { ROUTE_NAMES } from "./routeNames";
import { PrivateRoute } from "./privateRoute";
import { SignUpPageContainer } from "../pages/signUp/containers/SignUpPageContainer";

export const Router = () => {
    return (
        <Routes>
            <Route
                path={ROUTE_NAMES.SIGN_IN}
                element={<SignInPageContainer />}
            />
            <Route
                path={ROUTE_NAMES.SIGN_UP}
                element={<SignUpPageContainer />}
            />
            <Route element={<PrivateRoute />}>
                <Route
                    path={ROUTE_NAMES.POKEMONS}
                    element={<PokemonsPageContainer />}
                />
                <Route
                    path={ROUTE_NAMES.POKEMON_DETAILS}
                    element={<PokemonDetailsContainer />}
                />
                <Route path={ROUTE_NAMES.CART} element={<CartContainer />} />
            </Route>
        </Routes>
    );
};
