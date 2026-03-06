"use client";

import { useState, useEffect } from "react";
import { Movie } from "../types/movies";
import { fetchMovies } from "../services/MovieService";

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchMovies();
        setMovies(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }else{
          setError("Ocurrió un error desconocido");
        }
      } finally {
        setIsLoading(false);
      }
    };
    loadMovies();
  }, []);

  return { movies, isLoading, error};
}