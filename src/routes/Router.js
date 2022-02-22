import { Routes, Route } from "react-router-dom";

import { SignInPageContainer } from "../pages/signIn/containers/SignInPageContainer";
import { SignUpPageContainer } from "../pages/signUp/containers/SignUpPageContainer";
import { AccountContainer } from "../pages/account/containers/AccountContainer";
import { OrdersContainer } from "../pages/orders/containers/OrdersContainer";
import { PokemonsPageContainer } from "../pages/pokemons/containers/PokemonsPageContainer";
import { PokemonDetailsContainer } from "../pages/pokemonDetails/containers/PokemonDetailsContainer";
import { CartContainer } from "../pages/cart/containers/CartContainer";

import { ROUTE_NAMES } from "./routeNames";
import { PrivateRoute } from "./privateRoute";

export const Router = () => {
    return (
        <Routes>
            <Route path={ROUTE_NAMES.HOME} element={<SignInPageContainer />} />
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
                    path={ROUTE_NAMES.ACCOUNT}
                    element={<AccountContainer />}
                />
                <Route
                    path={ROUTE_NAMES.ORDERS}
                    element={<OrdersContainer />}
                />
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
