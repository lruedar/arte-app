export interface Director {
  id: string;
  name: string;
  photo: string;
  nationality: string;
  birthDate: string;
  biography: string;
}

export interface Genre {
  id: string;
  type: string;
}

export interface Review {
  id: string;
  text: string;
  score: number;
  creator: string;
}

export interface Movie {
  id: string;
  title: string;
  poster: string;
  duration: number;
  country: string;
  releaseDate: string;
  popularity: number;
  director: Director;
  genre: Genre;
  reviews: Review[];
  youtubeTrailer: {
    url: string;
    name: string;
  };
}