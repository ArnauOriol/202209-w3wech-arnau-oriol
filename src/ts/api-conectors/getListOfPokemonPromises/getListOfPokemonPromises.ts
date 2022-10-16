import type { PokemonListResponse } from "../../types.js";
import fetchPokemonInfo from "../fetchPokemonInfo/fetchPokemonInfo.js";

const getListOfPokemonPromises = async (pokemonArray: PokemonListResponse) => {
  const pokemonPromiseList = pokemonArray.results.map(async (pokemonResult) => {
    const response = await fetchPokemonInfo(pokemonResult.url);
    return response;
  });

  return Promise.all(pokemonPromiseList);
};

export default getListOfPokemonPromises;
