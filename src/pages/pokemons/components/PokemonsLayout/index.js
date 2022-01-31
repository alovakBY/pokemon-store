import { Pokemons } from "../Pokemons";

export const PokemonsLayout = ({ pokemons }) => {
    return pokemons.map(({ name, id }) => {
        return <Pokemons key={id} name={name} id={id} />;
    });
};
