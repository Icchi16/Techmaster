const Pokemon = ({ pokemon }) => {
  return (
    <div className="pokemon">
      <div className="pokemon-name">{pokemon.name}</div>
      <img src={pokemon.name}></img>
      <div className="pokemon-type">Type: {pokemon.type}</div>
    </div>
  );
};

const PokemonTypes = PropTypes.exact({
  id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
});

Pokemon.propTypes = {
  pokemon: PokemonTypes,
};
