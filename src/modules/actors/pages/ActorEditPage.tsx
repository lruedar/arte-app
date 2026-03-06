"use client";

import { useActors } from "../hooks/useActors";
import ActorForm from "../ui/ActorForm";

export default function ActorEditPage() {
  const { actor, error, isSubmitting, isLoadingData, handleUpdate } = useActors();

  if (isLoadingData) return <div className="p-10 text-center">Cargando datos...</div>;
  if (!actor && !isLoadingData) return <div className="p-10 text-center">No se encontró el actor.</div>;

  return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Editar Actor: {actor?.name}</h1>
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 font-medium">
            {error}
          </div>
        )}

        <ActorForm
          onSubmit={handleUpdate}
          initialData={actor}
          isSubmitting={isSubmitting}
        />
      </div>
    );
}