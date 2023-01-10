import { useEffect, useState } from 'react';
import { useContainer } from '../context/ContainerContext';
import { Pokemon } from '../domain/Pokemon';

const PokemonList = () => {
  const { getPokemonDetailsList } = useContainer();
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);

  useEffect(() => {
    const getList = async () => {
      const { results, count } = await getPokemonDetailsList({
        offset: 20,
        limit: 5,
      });

      console.log(count);

      setPokemons(results);
    };

    getList();
  }, [getPokemonDetailsList]);

  return (
    <>
      {pokemons &&
        pokemons.map((pokemon) => <p key={pokemon.id}>{pokemon.name}</p>)}

      <br />

      <div>
        <p>Prev</p>
        <p>1</p>
        <p>Next</p>
      </div>
    </>
  );
};

export { PokemonList };
