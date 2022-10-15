import fetchPokemonList from "./fetchPokemonList";

describe("Given the function fetchPokemonList", () => {
  describe("When it receives https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0", () => {
    test("Then it should return the name and url of the first 5 pokemons", async () => {
      const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
      const listSize = "?limit=5";
      const offset = "&offset=10";
      const expectedPokemonList = [
        {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon/1/",
        },
        {
          name: "ivysaur",
          url: "https://pokeapi.co/api/v2/pokemon/2/",
        },
        {
          name: "venusaur",
          url: "https://pokeapi.co/api/v2/pokemon/3/",
        },
        {
          name: "charmander",
          url: "https://pokeapi.co/api/v2/pokemon/4/",
        },
        {
          name: "charmeleon",
          url: "https://pokeapi.co/api/v2/pokemon/5/",
        },
      ];

      const pokemonNameAndUrl = await fetchPokemonList(
        apiUrl,
        listSize,
        offset
      );

      expect(pokemonNameAndUrl).toStrictEqual(expectedPokemonList);
    });
  });
});
