"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Actor, ActorFormData } from "../types/actors";
import { fetchActors, deleteActor, updateActor as apiUpdate, getActorById } from "../services/ActorService";

export function useActors() {
  const { id } = useParams();
  const router = useRouter();

  const [actors, setActors] = useState<Actor[]>([]);
  const [actor, setActor] = useState<Actor | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingData, setIsLoadingData] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadActors = async () => {
      try {
        setIsLoading(true);
        const data = await fetchActors();
        setActors(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error al cargar actores");
      } finally {
        setIsLoading(false);
      }
    };
    loadActors();
  }, []);

  useEffect(() => {
    if (!id) return;
    const load = async () => {
      try {
        setIsLoadingData(true);
        const data = await getActorById(id as string);
        setActor(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error al encontrar actor");
      } finally {
        setIsLoadingData(false);
      }
    };
    load();
  }, [id]);

  const handleUpdate = async (data: ActorFormData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const updatedActor = await apiUpdate(id as string, data);

      setActors((prev) =>
        prev.map((a) => (a.id === id ? updatedActor : a))
      );

      router.push("/actors");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocurrió un error al actualizar");
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeActor = async (actorId: string) => {
    setIsSubmitting(true);
    setError(null);
    try {
      await deleteActor(actorId);
      setActors((prev) => prev.filter((a) => a.id !== actorId));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Ocurrió un error al eliminar";
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    actors,
    actor,
    isLoading,
    isLoadingData,
    isSubmitting,
    error,
    handleUpdate,
    removeActor
  };
}