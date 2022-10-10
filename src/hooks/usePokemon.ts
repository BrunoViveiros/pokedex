import { useEffect, useState } from 'react';

import { fetchPokemonListWithDetails } from '../infra/pokemon/fetchPokemonListWithDetails';
import { Pokemon } from '../domain/Pokemon';

const usePokemon = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const getPokemonListWithDetails = async () => {
    const pokemonList = await fetchPokemonListWithDetails();

    setPokemons(pokemonList);
  };

  useEffect(() => {
    getPokemonListWithDetails();
  }, []);

  return {
    pokemons,
  };
};

export { usePokemon };
