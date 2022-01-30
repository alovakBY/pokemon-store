export const PokemonDetails = ({ name, imgSrc }) => {
  return (
    <div>
      <div>{name}</div>
      <img src={imgSrc} />
    </div>
  );
};
