import { useCallback, useEffect, useState } from 'react';
import { fetchPokemonList } from '../lib/getPokemonsList';
import { fetchPokemonDetails } from '../lib/getPokemonDetails';

import { Pokemon } from '../domain/Pokemon';

const usePokemon = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const getPokemons = async () => {
    const response = await fetchPokemonList('pokemon');

    return response.data;
  };

  const getPokemonDetails = async (pokemonName: string) => {
    const response = await fetchPokemonDetails(`pokemon/${pokemonName}`);

    return response.data;
  };

  const getPokemonListDetails = useCallback(async () => {
    const pokemonList = await getPokemons();

    const pokemonQueries = pokemonList.results.map(({ name }) => {
      return getPokemonDetails(name);
    });

    const pokemonListDetails = await Promise.all(pokemonQueries);

    return pokemonListDetails;
  }, []);

  const formatPokemonList = useCallback(async () => {
    const pokemonListDetails = await getPokemonListDetails();

    const formattedPokemonListDetails = pokemonListDetails.map((pokemon) => {
      const pokemonType = pokemon.types.find((type) => type.slot === 1);

      return {
        id: pokemon.id,
        name: pokemon.name,
        sprite: pokemon.sprites.other['official-artwork'].front_default,
        type: pokemonType?.type.name || '',
      };
    });

    console.log(formattedPokemonListDetails);

    setPokemons(formattedPokemonListDetails);
  }, [getPokemonListDetails]);

  useEffect(() => {
    formatPokemonList();
  }, [formatPokemonList]);

  return {
    pokemons,
  };
};

export { usePokemon };
