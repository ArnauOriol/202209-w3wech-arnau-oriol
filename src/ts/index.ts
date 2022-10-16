import fetchPokemonList from "./api-conectors/fetchPokemonList/fetchPokemonList.js";
import {
  pokemonApiUrl,
  pokemonListLimit,
  offset,
} from "./api-conectors/urls.js";
import Component from "./components/Component/Component.js";
import Header from "./components/Header/Header.js";
import PokemonEntryList from "./components/PokemonEntryList/PokemonEntryList.js";

const root = document.querySelector(".root");
const header = new Header(root as HTMLElement, "Pokémon");
header.render();
const main = new Component(root as HTMLElement, "pokemon-content", "main");
main.render();

const mainContent = document.querySelector("main");

const pokemonList = await fetchPokemonList(
  pokemonApiUrl,
  pokemonListLimit,
  offset
);

const pokeList = new PokemonEntryList(mainContent, pokemonList);
await pokeList.render();
