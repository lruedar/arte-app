import { fetcher } from "@/shared/services/http";
import { Actor, ActorFormData } from "../types/actors";

export const fetchActors = (): Promise<Actor[]> => {
  return fetcher<Actor[]>("/api/v1/actors");
};

export const createActor = async (data: ActorFormData): Promise<Actor> => {
  return await fetcher<Actor>("/api/v1/actors", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const deleteActor = (id: string): Promise<void> => {
  return fetcher<void>(`/api/v1/actors/${id}`, {
    method: "DELETE",
  });
};

export const getActorById = async (id: string): Promise<Actor> => {
  return await fetcher<Actor>(`/api/v1/actors/${id}`);
};

export const updateActor = async (id: string, data: ActorFormData): Promise<Actor> => {
  return await fetcher<Actor>(`/api/v1/actors/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
};
