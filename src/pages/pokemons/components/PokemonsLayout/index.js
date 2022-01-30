import { Pokemons } from "../Pokemons";

export const PokemonsLayout = ({ pokemons }) => {
  return pokemons.map(({ name, url }) => {
    return <Pokemons key={url} name={name} />;
  });
};
