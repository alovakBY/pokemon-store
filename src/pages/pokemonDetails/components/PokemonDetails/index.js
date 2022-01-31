export const PokemonDetails = ({ pokemonInfo }) => {
    return (
        <div>
            <div>{pokemonInfo.name}</div>
            <img src={pokemonInfo.image} />
            <div>Price: {pokemonInfo.price} y.e.</div>
        </div>
    );
};
