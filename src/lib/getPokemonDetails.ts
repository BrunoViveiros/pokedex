import api from '../services/api';

type ApiResponse<T> = {
  status?: string;
  data: T;
};

type Pokemon = {
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

type GetPokemonDetails = (url: string) => Promise<ApiResponse<Pokemon>>;

const makeFetchPokemonDetails =
  ({ getProvider }: { getProvider: any }): GetPokemonDetails =>
  (url: string) => {
    return getProvider(url);
  };

const fetchPokemonDetails = makeFetchPokemonDetails({ getProvider: api.get });

export { fetchPokemonDetails };
