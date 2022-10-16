import type { PokemonInfo } from "../../types.js";

const fetchPokemonInfo = async (pokemonUrl: string) => {
  const response = await fetch(pokemonUrl);
  const pokemonInfo = (await response.json()) as PokemonInfo;
  return pokemonInfo;
};

export default fetchPokemonInfo;
