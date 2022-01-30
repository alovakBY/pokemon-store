import { Routes, Route } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";

import { PokemonsPageContainer } from "../pages/pokemons/containers/PokemonsPageContainer";
import { PokemonDetailsContainer } from "../pages/pokemonDetails/containers/PokemonDetailsContainer";
import { LoginPageContainer } from "../pages/login/containers/LoginPageContainer";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<div>Home</div>} />
      <Route path={ROUTE_NAMES.SIGN_IN} element={<LoginPageContainer />} />
      <Route path={ROUTE_NAMES.POKEMONS} element={<PokemonsPageContainer />} />
      <Route
        path={ROUTE_NAMES.POKEMON_DETAILS}
        element={<PokemonDetailsContainer />}
      ></Route>
    </Routes>
  );
};
