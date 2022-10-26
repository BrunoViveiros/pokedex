import { useEffect, useState } from 'react';

import { Pokemon } from '../domain/Pokemon';
import { getPokemonDetailsList } from '../container';

const usePokemon = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const getPokemons = async () => {
    const pokemonDetailsList = await getPokemonDetailsList();

    setPokemons(pokemonDetailsList);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return {
    pokemons,
  };
};

export { usePokemon };
