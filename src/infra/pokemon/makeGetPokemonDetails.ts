import { PokemonApiClient } from '../api/pokemonApiClient';
import { Pokemon } from '../../domain/Pokemon';

type PokemonDetails = {
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

const formatPokemonDetails = (pokemonDetails: PokemonDetails): Pokemon => {
  const pokemonType = pokemonDetails.types.find((type) => type.slot === 1);

  return {
    id: pokemonDetails.id,
    name: pokemonDetails.name,
    sprite: pokemonDetails.sprites.other['official-artwork'].front_default,
    type: pokemonType?.type.name || '',
  };
};

const makeGetPokemonDetails =
  ({ pokemonApiClient }: MakeGetPokemonDetailsProps) =>
  async (pokemonName: string) => {
    const response = await pokemonApiClient.get<PokemonDetails>(
      `pokemon/${pokemonName}`
    );

    const pokemonDetails = response.data;

    return formatPokemonDetails(pokemonDetails);
  };

export { makeGetPokemonDetails };
