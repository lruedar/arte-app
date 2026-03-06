"use client";

import Image from "next/image";
import { Actor } from "../types/actors";

interface ActorCardProps {
  actor: Actor;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export default function ActorCard({ actor, onDelete, onEdit }: ActorCardProps) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
      <div className="relative w-full h-56 bg-gray-100">
        <Image
          src={actor.photo}
          alt={actor.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
          priority={false}
          placeholder="blur"
          blurDataURL="https://via.placeholder.com/400x300?text=Cargando..."
        />
      </div>

      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg text-gray-800">{actor.name}</h3>
          <p className="text-sm text-gray-500">{actor.nationality}</p>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <button
            onClick={() => onEdit(actor.id)}
            className="flex-1 bg-blue-50 text-blue-600 py-2 px-4 rounded-lg text-sm font-bold hover:bg-blue-600 hover:text-white transition-all duration-200 text-center"
          >
            Editar
          </button>

          <button
            onClick={() => onDelete(actor.id)}
            className="flex-1 bg-red-50 text-red-600 py-2 px-4 rounded-lg text-sm font-bold hover:bg-red-600 hover:text-white transition-all duration-200 text-center"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}