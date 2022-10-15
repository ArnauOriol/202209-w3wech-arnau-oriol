import fetchPokemonList from "./api-connectors/fetchPokemonList/fetchPokemonList.js";
import {
  pokemonApiUrl,
  pokemonListLimit,
  offset,
} from "./api-connectors/urls.js";
import Header from "./components/Header/Header.js";

const container: HTMLElement = document.querySelector(".root");
const header = new Header(container, "Pocaimon");
header.render();

const pokemonList = await fetchPokemonList(
  pokemonApiUrl,
  pokemonListLimit,
  offset
);
