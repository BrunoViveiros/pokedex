import { fetchPokemonDetails, PokemonDetails } from './fetchPokemonDetails';
import { fetchPokemonList } from './fetchPokemonList';
import { Pokemon } from '../../domain/Pokemon';

const formatPokemonListWithDetails = (
  pokemonListWithDetails: PokemonDetails[]
): Pokemon[] =>
  pokemonListWithDetails.map((pokemon) => {
    const pokemonType = pokemon.types.find((type) => type.slot === 1);

    return {
      id: pokemon.id,
      name: pokemon.name,
      sprite: pokemon.sprites.other['official-artwork'].front_default,
      type: pokemonType?.type.name || '',
    };
  });

const fetchPokemonListWithDetails = async () => {
  const pokemonList = await fetchPokemonList();

  const pokemonQueries = pokemonList.results.map(({ name }) => {
    return fetchPokemonDetails(name);
  });

  const pokemonListWithDetails = await Promise.all(pokemonQueries);

  return formatPokemonListWithDetails(pokemonListWithDetails);
};

export { fetchPokemonListWithDetails };
