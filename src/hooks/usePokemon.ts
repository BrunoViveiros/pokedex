import { useEffect, useState } from 'react';

import { PokemonDetails } from '../infra/pokemon/makeGetPokemonDetails';
import { Pokemon } from '../domain/Pokemon';
import { getPokemonDetailsList } from '../infra/container';

const formatPokemonListDetails = (
  pokemonListDetails: PokemonDetails[]
): Pokemon[] =>
  pokemonListDetails.map((pokemon) => {
    const pokemonType = pokemon.types.find((type) => type.slot === 1);

    return {
      id: pokemon.id,
      name: pokemon.name,
      sprite: pokemon.sprites.other['official-artwork'].front_default,
      type: pokemonType?.type.name || '',
    };
  });

const usePokemon = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const getPokemons = async () => {
    const pokemonDetailsList = await getPokemonDetailsList();
    const formattedPokemonDetailsList =
      formatPokemonListDetails(pokemonDetailsList);
    setPokemons(formattedPokemonDetailsList);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return {
    pokemons,
  };
};

export { usePokemon };
