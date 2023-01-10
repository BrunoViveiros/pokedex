import { render, screen } from '@testing-library/react';
import { Container } from '../container';
import { ContainerContext } from '../context/ContainerContext';
import { PokemonList } from './PokemonList';

const container: Container = {
  getPokemonDetails: jest.fn(),
  getPokemonList: jest.fn(),
  getPokemonDetailsList: ({ offset, limit }) =>
    Promise.resolve({
      count: 1154,
      next: 'https://pokeapi.co/api/v2/pokemon?offset=25&limit=5',
      previous: 'https://pokeapi.co/api/v2/pokemon?offset=15&limit=5',
      results: [
        {
          id: 21,
          name: 'spearow',
          sprite:
            'https://raw.githubusercontent.com/PokeAPI/sprites/…ter/sprites/pokemon/other/official-artwork/21.png',
          type: 'normal',
        },
        {
          id: 22,
          name: 'fearow',
          sprite:
            'https://raw.githubusercontent.com/PokeAPI/sprites/…ter/sprites/pokemon/other/official-artwork/22.png',
          type: 'normal',
        },
        {
          id: 23,
          name: 'ekans',
          sprite:
            'https://raw.githubusercontent.com/PokeAPI/sprites/…ter/sprites/pokemon/other/official-artwork/23.png',
          type: 'poison',
        },
        {
          id: 24,
          name: 'arbok',
          sprite:
            'https://raw.githubusercontent.com/PokeAPI/sprites/…ter/sprites/pokemon/other/official-artwork/24.png',
          type: 'poison',
        },
        {
          id: 25,
          name: 'pikachu',
          sprite:
            'https://raw.githubusercontent.com/PokeAPI/sprites/…ter/sprites/pokemon/other/official-artwork/25.png',
          type: 'electric',
        },
      ],
    }),
};

describe('<PokemonList />', () => {
  it('renders pokemon list', async () => {
    render(
      <ContainerContext.Provider value={container}>
        <PokemonList />
      </ContainerContext.Provider>
    );

    const pokemonName = await screen.findByText(/spearow/i);

    expect(pokemonName).toBeInTheDocument();
  });
});

// import pokemonApiClient from './infra/api/pokemonApiClient';
// import { makeGetPokemonDetails } from './infra/pokemon/makeGetPokemonDetails';
// import { makeGetPokemonList } from './infra/pokemon/makeGetPokemonList';
// import { makeGetPokemonDetailsList } from './infra/pokemon/makeGetPokemonDetailsList';

// const getPokemonDetails = makeGetPokemonDetails({ pokemonApiClient });
// const getPokemonList = makeGetPokemonList({ pokemonApiClient });
// const getPokemonDetailsList = makeGetPokemonDetailsList({
//   getPokemonDetails,
//   getPokemonList,
// });
