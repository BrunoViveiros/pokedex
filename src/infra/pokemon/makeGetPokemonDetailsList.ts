import { Pokemon } from '../../domain/Pokemon';
import { PokemonList, GetPokemonListProps } from './makeGetPokemonList';

type Dependencies = {
  getPokemonList: ({
    offset,
    limit,
  }: GetPokemonListProps) => Promise<PokemonList>;
  getPokemonDetails: (pokemonName: string) => Promise<Pokemon>;
};

type GetPokemonDetailsList = {
  offset?: number;
  limit?: number;
};

const makeGetPokemonDetailsList =
  ({ getPokemonList, getPokemonDetails }: Dependencies) =>
  async ({ offset = 0, limit = 10 }: GetPokemonDetailsList) => {
    const pokemonList = await getPokemonList({ offset, limit });

    const pokemonQueries = pokemonList.results.map(({ name }) => {
      return getPokemonDetails(name);
    });

    const pokemonListDetails = await Promise.all(pokemonQueries);

    return { ...pokemonList, results: pokemonListDetails };
  };

export { makeGetPokemonDetailsList };
