import { usePokemon } from '../hooks/usePokemon';

const PokemonList = () => {
  const { pokemons } = usePokemon();

  return (
    <>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>{pokemon.name}</div>
      ))}
    </>
  );
};

export { PokemonList };
