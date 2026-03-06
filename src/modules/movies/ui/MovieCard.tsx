"use client";

import Image from "next/image";
import { Movie } from "../types/movies";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
      <div className="relative w-full h-56 bg-gray-100">
        <Image
          src={movie.poster}
          alt={movie.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL="https://via.placeholder.com/400x300?text=Cargando..."
        />
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-lg text-gray-800 leading-tight">
          {movie.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          {movie.country}
        </p>
      </div>
    </div>
  );
}