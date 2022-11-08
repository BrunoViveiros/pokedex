import { useEffect, useState } from 'react';
import { useContainer } from '../context/ContainerContext';
import { Pokemon } from '../domain/Pokemon';

const PokemonList = () => {
  const { getPokemonDetailsList } = useContainer();
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);

  useEffect(() => {
    const getList = async () => {
      const pokemonList = await getPokemonDetailsList();

      setPokemons(pokemonList);
    };

    getList();
  }, [getPokemonDetailsList]);

  return (
    <>
      {pokemons &&
        pokemons.map((pokemon) => <div key={pokemon.id}>{pokemon.name}</div>)}
    </>
  );
};

export { PokemonList };
