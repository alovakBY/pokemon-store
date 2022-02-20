import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useCart } from "../../../hooks/useCart";

import * as actions from "../actions";
import { pokemonDetailsPageSelector } from "../selectors";
import { PokemonDetailsLayout } from "../components/PokemonDetailsLayout";

export const PokemonDetailsContainer = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { cartLoading } = useCart();
    const { isLoading, errors, pokemonInfo } = useSelector(
        pokemonDetailsPageSelector
    );
    useEffect(() => {
        dispatch(actions.GET_POKEMON_DETAILS_REQUEST(id));
    }, []);

    if (errors) {
        console.log(errors);
    }

    return (
        <PokemonDetailsLayout
            cartLoading={cartLoading}
            isLoading={isLoading}
            pokemonInfo={pokemonInfo}
        />
    );
};
