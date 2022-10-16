import type { PokemonListResponse } from "../../types.js";
import fetchPokemonInfo from "../fetchPokemonInfo/fetchPokemonInfo.js";

const getListOfPokemonPromises = async (pokemonArray: PokemonListResponse) => {
  const pokemonPromiseList = pokemonArray.results.map(async (pokemonResult) => {
    const pokemonDetails = await fetchPokemonInfo(pokemonResult.url);
    return pokemonDetails;
  });

  return Promise.all(pokemonPromiseList);
};

export default getListOfPokemonPromises;
