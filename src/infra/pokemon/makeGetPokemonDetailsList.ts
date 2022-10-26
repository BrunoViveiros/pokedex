import { Pokemon } from '../../domain/Pokemon';
import { PokemonList } from './makeGetPokemonList';

type Dependencies = {
  getPokemonList: () => Promise<PokemonList>;
  getPokemonDetails: (pokemonName: string) => Promise<Pokemon>;
};

const makeGetPokemonDetailsList =
  ({ getPokemonList, getPokemonDetails }: Dependencies) =>
  async () => {
    const pokemonList = await getPokemonList();

    const pokemonQueries = pokemonList.results.map(({ name }) => {
      return getPokemonDetails(name);
    });

    const pokemonListDetails = await Promise.all(pokemonQueries);

    return pokemonListDetails;
  };

export { makeGetPokemonDetailsList };
