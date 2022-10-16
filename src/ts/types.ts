export interface PokemonListResponse {
  results: PokemonNameAndUrl[];
}

export interface PokemonNameAndUrl {
  name: string;
  url: string;
}

export interface PokemonInfo {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: Sprites;
}

interface Sprites {
  front_default: string;
  other: ImagePath;
}

interface ImagePath {
  "official-artwork": MainImage;
}

interface MainImage {
  front_default: string;
}
