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

export type MakeGetPokemonListProps = {
  pokemonApiClient: PokemonApiClient;
};

export type GetPokemonListProps = {
  offset: number;
  limit: number;
};

const makeGetPokemonList =
  ({ pokemonApiClient }: MakeGetPokemonListProps) =>
  async ({ offset, limit }: GetPokemonListProps) => {
    const response = await pokemonApiClient.get<PokemonList>(
      `pokemon?offset=${offset}&limit=${limit}`
    );

    return response.data;
  };

export { makeGetPokemonList };
