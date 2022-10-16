import type { PokemonInfo } from "../../types.js";
import Component from "../Component/Component.js";

class PokemonEntry extends Component {
  constructor(
    parentElement: HTMLElement,
    private readonly pokemon: PokemonInfo
  ) {
    super(parentElement, "pokemon-entry", "li");
  }

  render() {
    super.render();

    const {
      id,
      name,
      sprites: { front_default: image },
    } = this.pokemon;

    this.domElement.innerHTML = `
    <div class="pokemonCard-container">
      <h2>${id}. ${name.toUpperCase()}</h2>
      <img src="${image}" alt="${name}">
    </div>
    `;
  }
}

export default PokemonEntry;
