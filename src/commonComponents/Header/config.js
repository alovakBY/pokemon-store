import { ROUTE_NAMES } from "../../routes/routeNames";

export const NAVIGATION = {
    PRIVATE: [
        {
            title: "store",
            path: ROUTE_NAMES.POKEMONS,
        },
    ],
    PUBLIC: [
        {
            title: "sign in",
            path: ROUTE_NAMES.SIGN_IN,
        },
        {
            title: "sign up",
            path: ROUTE_NAMES.SIGN_UP,
        },
    ],
};
