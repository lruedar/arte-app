"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ActorFormData } from "../types/actors";
import { createActor } from "../services/ActorService";
import ActorForm from "../ui/ActorForm";


export default function ActorCreatePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleCreateActor = async(data: ActorFormData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      await createActor(data);
      router.push("/actors");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Ocurrió un error";
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Crear Nuevo Actor</h1>
      <ActorForm onSubmit={handleCreateActor} isSubmitting={isSubmitting} />
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}