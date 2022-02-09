import { ROUTE_NAMES } from "../../routes/routeNames";

export const NAVIGATION = {
    PRIVATE: [
        {
            title: "Store",
            path: ROUTE_NAMES.POKEMONS,
        },
        {
            title: "Cart",
            path: ROUTE_NAMES.CART,
        },
    ],
    PUBLIC: [
        {
            title: "Sign in",
            path: ROUTE_NAMES.SIGN_IN,
        },
        {
            title: "Sign up",
            path: ROUTE_NAMES.SIGN_UP,
        },
    ],
};
