"use client";

import { useMovies } from "../hooks/useMovies";
import { DataGrid } from "@/shared/ui/DataGrid";
import MovieCard from "./MovieCard";

export function MoviesList() {
  const { movies, isLoading, error } = useMovies();

  return (
    <DataGrid
      items={movies}
      loading={isLoading}
      error={error}
      renderItem={(movie) => (
        <MovieCard key={movie.id} movie={movie} />
      )}
    />
  );
}