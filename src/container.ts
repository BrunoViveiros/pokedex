import pokemonApiClient from './infra/api/pokemonApiClient';
import { makeGetPokemonDetails } from './infra/pokemon/makeGetPokemonDetails';
import { makeGetPokemonList } from './infra/pokemon/makeGetPokemonList';
import { makeGetPokemonDetailsList } from './infra/pokemon/makeGetPokemonDetailsList';

const getPokemonDetails = makeGetPokemonDetails({ pokemonApiClient });
const getPokemonList = makeGetPokemonList({ pokemonApiClient });
const getPokemonDetailsList = makeGetPokemonDetailsList({
  getPokemonDetails,
  getPokemonList,
});

export { getPokemonDetails, getPokemonList, getPokemonDetailsList };
