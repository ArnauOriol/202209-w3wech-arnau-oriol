export interface PokemonListResponse {
  results: PokemonNameAndUrl[];
}

export interface PokemonNameAndUrl {
  name: string;
  url: string;
}
