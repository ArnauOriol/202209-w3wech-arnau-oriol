import type { PokemonInfo } from "../../types";
import PokemonEntry from "./PokemonEntry";

describe("Given the PokemonEntry component", () => {
  describe("When it renders with a Bulbasaur", () => {
    test("Then it should show an h2 with '1. Bulbasaur'", () => {
      const screen = document.createElement("div");
      const pokemon: PokemonInfo = {
        id: 1,
        height: 2,
        weight: 2,
        name: "Bulbasaur",
        sprites: {
          ["front_default"]:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          other: {
            "official-artwork": {
              ["front_default"]: "hola",
            },
          },
        },
      };
      const tag = "h2";
      const expectedTitle = `${pokemon.id}. ${pokemon.name}`;

      const pokemonEntry = new PokemonEntry(screen, pokemon);
      pokemonEntry.render();
      const heading = screen.querySelector(tag);

      expect(heading).not.toBeNull();
      expect(heading.textContent).toBe(expectedTitle);
    });
  });
});
