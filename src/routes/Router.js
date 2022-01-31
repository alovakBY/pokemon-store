import { Routes, Route } from "react-router-dom";

import { PokemonsPageContainer } from "../pages/pokemons/containers/PokemonsPageContainer";
import { PokemonDetailsContainer } from "../pages/pokemonDetails/containers/PokemonDetailsContainer";
import { LoginPageContainer } from "../pages/login/containers/LoginPageContainer";

import { ROUTE_NAMES } from "./routeNames";
import { PrivateRoute } from "./privateRoute";

export const Router = () => {
    return (
        <Routes>
            <Route
                path={ROUTE_NAMES.SIGN_IN}
                element={<LoginPageContainer />}
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
            </Route>
        </Routes>
    );
};
