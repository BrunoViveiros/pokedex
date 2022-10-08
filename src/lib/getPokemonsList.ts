import api from '../services/api';

type ApiResponse<T> = {
  status?: string;
  data: T;
};

type Pokemon = {
  name: string;
  url: string;
};

export type PokemonList = {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
};

type GetPokemonList = (url: string) => Promise<ApiResponse<PokemonList>>;

const makeFetchPokemonList =
  ({ getProvider }: { getProvider: any }): GetPokemonList =>
  (url: string) => {
    return getProvider(url);
  };

const fetchPokemonList = makeFetchPokemonList({ getProvider: api.get });

export { fetchPokemonList };
