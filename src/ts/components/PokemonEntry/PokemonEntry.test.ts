import type { PokemonInfo } from "../../types";
import PokemonEntry from "./PokemonEntry";

let screen: HTMLElement;

beforeEach(() => {
  screen = document.createElement("div");
});

describe("Given the PokemonEntry component", () => {
  describe("When it renders with a Bulbasaur", () => {
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

    test("Then it should show an h2 with '1. Bulbasaur'", () => {
      const tag = "h2";
      const expectedTitle = `${pokemon.id}. ${pokemon.name}`;

      const pokemonEntry = new PokemonEntry(screen, pokemon);
      pokemonEntry.render();
      const heading = screen.querySelector(tag);

      expect(heading).not.toBeNull();
      expect(heading.textContent).toBe(expectedTitle);
    });

    test("Then it should show a Bulbasaur img with 'Bulbasaur' in the alternative text", () => {
      const tag = "img";

      const pokemonEntry = new PokemonEntry(screen, pokemon);
      pokemonEntry.render();
      const picture = screen.querySelector(tag);

      expect(picture).not.toBeNull();
      expect(picture.src).toBe(pokemon.sprites.front_default);
      expect(picture.alt).toBe(pokemon.name);
    });
  });
});
