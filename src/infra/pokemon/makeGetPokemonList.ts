import { PokemonApiClient } from '../api/pokemonApiClient';

export type PokemonList = {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
};

type Pokemon = {
  name: string;
  url: string;
};

type MakeGetPokemonListProps = {
  pokemonApiClient: PokemonApiClient;
};

const makeGetPokemonList =
  ({ pokemonApiClient }: MakeGetPokemonListProps) =>
  async () => {
    const response = await pokemonApiClient.get<PokemonList>('pokemon');

    return response.data;
  };

export { makeGetPokemonList };
