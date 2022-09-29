type PokemonAPIResponse = {
  id: number;
  name: string;
  sprites: PokemonSpritesAPIResponse;
  types: PokemonTypesAPIResponse[];
};

type PokemonSpritesAPIResponse = {
  'official-artwork': {
    front_default: string;
  };
};

type PokemonTypesAPIResponse = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type GetPokemon = (url: string) => Promise<Pokemon[]>;

const fetchPokemon = (url?: string) => {
  return Promise.resolve([
    {
      id: 1,
      name: 'pikachu',
    },
  ]);
};

const getPokemon: GetPokemon = async () => {
  const data = await fetchPokemon('adfadf');

  return data;
};
