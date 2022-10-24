import { PokemonDetails } from './makeGetPokemonDetails';
import { PokemonList } from './makeGetPokemonList';

type Dependencies = {
  getPokemonList: () => Promise<PokemonList>;
  getPokemonDetails: (pokemonName: string) => Promise<PokemonDetails>;
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
