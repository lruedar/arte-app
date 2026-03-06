"use client";
import { useState } from "react";
import { ActorFormData } from "../types/actors";

export function useActorForm(initialValues?: Partial<ActorFormData>) {
  const [values, setValues] = useState<ActorFormData>({
    name: initialValues?.name || "",
    photo: initialValues?.photo || "",
    nationality: initialValues?.nationality || "",
    birthDate: initialValues?.birthDate || "",
    biography: initialValues?.biography || "",
  });

  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof ActorFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name as keyof ActorFormData]) {
      setFieldErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ActorFormData, string>> = {};
    const urlRegex = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;

    if (values.name.trim().length < 3) newErrors.name = "Mínimo 3 caracteres";
    if (!urlRegex.test(values.photo)) newErrors.photo = "URL de foto inválida";
    if (!values.nationality.trim()) newErrors.nationality = "Requerido";
    if (!values.birthDate) newErrors.birthDate = "Fecha requerida";
    if (values.biography.trim().length < 10) newErrors.biography = "Mínimo 10 caracteres";

    setFieldErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { values, setValues, fieldErrors, handleChange, validate };
}