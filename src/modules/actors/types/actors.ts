import { Movie } from "@/modules/movies/types/movies";

export interface Actor {
  id: string;
  name: string;
  photo: string;
  nationality: string;
  birthDate: string;
  biography: string;
  movies: Movie[];
}

export interface ActorFormData {
  name: string;
  photo: string;
  nationality: string;
  birthDate: string;
  biography: string;
}