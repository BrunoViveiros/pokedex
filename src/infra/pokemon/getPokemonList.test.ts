import {
  makeGetPokemonList,
  MakeGetPokemonListProps,
} from './makeGetPokemonList';
import { PokemonApiClient } from '../api/pokemonApiClient';
import { AxiosInstance } from 'axios';

const fakePokemonApiClient: MakeGetPokemonListProps = {
  pokemonApiClient: {
    get: jest.fn().mockResolvedValue({ data: {} }),
  } as AxiosInstance,
};

const getPokemonList = makeGetPokemonList(fakePokemonApiClient);

describe('makeGetPokemonList', () => {
  it('funciona', async () => {
    const teste = await getPokemonList({ offset: 0, limit: 0 });
    console.log(teste);
  });
});

// const fakePokemonApiClient: MakeGetPokemonListProps = {
//   pokemonApiClient: {
//     get(args) {
//       // implementação fake aqui
//     },
//   } as PokemonApiClient,
// };

// //ou

// const fakePokemonApiClient: MakeGetPokemonListProps = {
//   pokemonApiClient: {
//     get: jest.fn().mockResolvedValue(algumValor),
//   } as PokemonApiClient,
// };
