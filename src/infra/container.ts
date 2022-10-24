import pokemonApiClient from './api/pokemonApiClient';
import { makeGetPokemonDetails } from './pokemon/makeGetPokemonDetails';
import { makeGetPokemonList } from './pokemon/makeGetPokemonList';
import { makeGetPokemonDetailsList } from './pokemon/makeGetPokemonDetailsList';

const getPokemonDetails = makeGetPokemonDetails({ pokemonApiClient });
const getPokemonList = makeGetPokemonList({ pokemonApiClient });
const getPokemonDetailsList = makeGetPokemonDetailsList({
  getPokemonDetails,
  getPokemonList,
});

export { getPokemonDetails, getPokemonList, getPokemonDetailsList };
