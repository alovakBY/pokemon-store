import { useParams } from "react-router-dom";

import { useFetching } from "../../../../hooks/useFetching";

import { getPokemonDetails } from "../../services";

export const PokemonDetails = () => {
    const { pokemon } = useParams();
    const { response, loading, errors } = useFetching(() =>
        getPokemonDetails(pokemon)
    );

    return loading ? (
        <div>loading</div>
    ) : (
        <div>
            <div>{response.name}</div>
            <img
                src={
                    response.sprites.other["official-artwork"]["front_default"]
                }
                alt="pokemon"
            />
        </div>
    );
};
