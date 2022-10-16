import type { PokemonInfo, PokemonNameAndUrl } from "../../types.js";

const fetchPokemonInfo = async (pokemonNameUrl: PokemonNameAndUrl) => {
  const response = await fetch(pokemonNameUrl.url);
  const pokemonInfo = (await response.json()) as PokemonInfo;
  return pokemonInfo;
};
