const PokemonList = ({ pokemons }) => {
  const list = pokemons.map((pokemon) => (
    <Pokemon pokemon={pokemon} key={pokemon.id} />
  ));
  return <div className="pokemon-list">{list}</div>;
};

PokemonList.PropTypes = {
  pokemon: PropTypes.arrayOf(PokemonTypes),
};
