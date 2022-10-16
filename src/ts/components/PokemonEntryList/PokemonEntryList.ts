import Component from "../Component/Component.js";
import type { PokemonInfo, PokemonListResponse } from "../../types.js";
import PokemonEntry from "../PokemonEntry/PokemonEntry.js";
import getListOfPokemonPromises from "../../api-conectors/getListOfPokemonPromises/getListOfPokemonPromises.js";

class PokemonEntryList extends Component {
  constructor(
    parentElement: HTMLElement,
    private readonly pokemonPromiseList: PokemonListResponse
  ) {
    super(parentElement, "pokemon-list", "ol");
  }

  async render() {
    super.render();

    this.domElement.innerHTML = ``;
    await this.breakList();
  }

  private async breakList() {
    const pokemonList = await getListOfPokemonPromises(this.pokemonPromiseList);
    pokemonList.forEach((pokemon) => {
      new PokemonEntry(this.domElement, pokemon).render();
    });
  }
}

export default PokemonEntryList;
