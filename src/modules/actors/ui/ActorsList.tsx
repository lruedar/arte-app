"use client";

import { useRouter } from "next/navigation";
import { DataGrid } from "@/shared/ui/DataGrid";
import ActorCard from "./ActorCard";
import { useActors } from "../hooks/useActors";

export default function ActorsList() {
  const { actors, isLoading, error, removeActor } = useActors();
  const router = useRouter();

  return (
    <DataGrid
      items={actors}
      loading={isLoading}
      error={error}
      renderItem={(actor) => (
        <ActorCard
          key={actor.id}
          actor={actor}
          onDelete={removeActor}
          onEdit={(id) => router.push(`/actors/edit/${id}`)}
        />
      )}
    />
  );
}