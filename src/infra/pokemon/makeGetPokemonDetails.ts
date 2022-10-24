import { PokemonApiClient } from '../api/pokemonApiClient';

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

type MakeGetPokemonDetailsProps = {
  pokemonApiClient: PokemonApiClient;
};

const makeGetPokemonDetails =
  ({ pokemonApiClient }: MakeGetPokemonDetailsProps) =>
  async (pokemonName: string) => {
    const response = await pokemonApiClient.get<PokemonDetails>(
      `pokemon/${pokemonName}`
    );

    return response.data;
  };

export { makeGetPokemonDetails };
