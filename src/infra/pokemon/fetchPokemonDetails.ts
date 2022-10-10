import pokemonApiClient, { PokemonApiClient } from '../pokemonApiClient';

export type PokemonDetails = {
  id: number;
  name: string;
  sprites: PokemonSprites;
  types: PokemonTypes[];
};

type PokemonSprites = {
  other: {
    'official-artwork': {
      front_default: string;
    };
  };
};

type PokemonTypes = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type MakeFetchPokemonDetailsProps = {
  pokemonApiClient: PokemonApiClient;
};

const makeFetchPokemonDetails =
  ({ pokemonApiClient }: MakeFetchPokemonDetailsProps) =>
  async (pokemonName: string) => {
    const response = await pokemonApiClient.get<PokemonDetails>(
      `pokemon/${pokemonName}`
    );

    return response.data;
  };

const fetchPokemonDetails = makeFetchPokemonDetails({ pokemonApiClient });

export { fetchPokemonDetails };
