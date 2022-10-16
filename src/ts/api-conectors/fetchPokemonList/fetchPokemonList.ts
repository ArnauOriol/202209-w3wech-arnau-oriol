import type { PokemonListResponse } from "../../types.js";

const fetchPokemonList = async (
  pokemonApiUrl: string,
  pokemonListLimit: string,
  offset: string
) => {
  const response = await fetch(`${pokemonApiUrl}${pokemonListLimit}${offset}`);
  const results = (await response.json()) as PokemonListResponse;
  return results;
};

export default fetchPokemonList;
