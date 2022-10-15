import fetchPokemonList from "./api-connectors/fetchPokemonList/fetchPokemonList.js";
import {
  pokemonApiUrl,
  pokemonListLimit,
  offset,
} from "./api-connectors/urls.js";
import { PokemonNameAndUrl } from "./types.js";

const pokemonList = await fetchPokemonList(
  pokemonApiUrl,
  pokemonListLimit,
  offset
);

const getPokemonInfo = async () => {};
