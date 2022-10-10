import pokemonApiClient, { PokemonApiClient } from '../pokemonApiClient';

type PokemonList = {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
};

type Pokemon = {
  name: string;
  url: string;
};

type MakeFetchPokemonListProps = {
  pokemonApiClient: PokemonApiClient;
};

const makeFetchPokemonList =
  ({ pokemonApiClient }: MakeFetchPokemonListProps) =>
  async () => {
    const response = await pokemonApiClient.get<PokemonList>('pokemon');

    return response.data;
  };

const fetchPokemonList = makeFetchPokemonList({ pokemonApiClient });

export { fetchPokemonList };
