import fetchPokemonList from "./api-conectors/fetchPokemonList/fetchPokemonList.js";
import {
  pokemonApiUrl,
  pokemonListLimit,
  offset,
} from "./api-conectors/urls.js";
import Header from "./components/Header/Header.js";

const container: HTMLElement = document.querySelector(".root");
const header = new Header(container, "Pokémon");
header.render();

const pokemonList = await fetchPokemonList(
  pokemonApiUrl,
  pokemonListLimit,
  offset
);
