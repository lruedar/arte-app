import { Movie } from "../types/movies";
import { fetcher } from "@/shared/services/http";

export const fetchMovies = (): Promise<Movie[]> => {
  return fetcher<Movie[]>("/api/v1/movies");
};
