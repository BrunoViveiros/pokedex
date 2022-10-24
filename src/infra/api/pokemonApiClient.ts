import axios, { AxiosInstance } from 'axios';

const pokemonApiClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export default pokemonApiClient;

export type PokemonApiClient = AxiosInstance;
