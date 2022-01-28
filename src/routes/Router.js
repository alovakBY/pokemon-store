import { Routes, Route } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";

import { PokemonsPageContainer } from "../pages/pokemons/containers/PokemonsPageContainer";

export const Router = () => {
    return (
        <Routes>
            <Route path={ROUTE_NAMES.HOME} element={<div>Home</div>} />
            <Route
                path={ROUTE_NAMES.POKEMONS}
                element={<PokemonsPageContainer />}
            />
        </Routes>
    );
};
