"use client";
import { useEffect } from "react";
import { useActorForm } from "../hooks/useActorForm";
import { ActorFormData } from "../types/actors";
import { Actor } from "../types/actors";

interface ActorFormProps {
  onSubmit: (data: ActorFormData) => Promise<void>;
  isSubmitting: boolean;
  initialData?: Actor | null;
}

export default function ActorForm({ onSubmit, isSubmitting, initialData }: ActorFormProps) {
  const { values, setValues, fieldErrors, handleChange, validate } = useActorForm();

  useEffect(() => {
    if (initialData) {
      setValues({
        name: initialData.name,
        photo: initialData.photo,
        nationality: initialData.nationality,
        birthDate: initialData.birthDate,
        biography: initialData.biography,
      });
    }
  }, [initialData, setValues]);

  const handleLocalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      await onSubmit(values);
    }
  };

  return (
    <form onSubmit={handleLocalSubmit} className="space-y-4">

      {fieldErrors.name && <span className="text-red-500 text-xs">{fieldErrors.name}</span>}
      <input 
        name="name" 
        value={values.name} 
        onChange={handleChange} 
        placeholder="Nombre" 
        className="w-full border p-2 rounded" />
      
      {fieldErrors.photo && <span className="text-red-500 text-xs">{fieldErrors.photo}</span>}
      <input 
        name="photo" 
        value={values.photo} 
        onChange={handleChange} 
        placeholder="URL Foto" 
        className="w-full border p-2 rounded" />
      
       {fieldErrors.nationality && <span className="text-red-500 text-xs">{fieldErrors.nationality}</span>}
      <input 
        name="nationality" 
        value={values.nationality} 
        onChange={handleChange} 
        placeholder="Nacionalidad" 
        className="w-full border p-2 rounded" />
     
      {fieldErrors.birthDate && <span className="text-red-500 text-xs">{fieldErrors.birthDate}</span>}
      <input 
        name="birthDate" 
        type="date" value={values.birthDate} 
        onChange={handleChange} 
        className="w-full border p-2 rounded" />
      
      {fieldErrors.biography && <span className="text-red-500 text-xs">{fieldErrors.biography}</span>}
      <textarea 
        name="biography" 
        value={values.biography} 
        onChange={handleChange} 
        placeholder="Biografía" 
        className="w-full border p-2 rounded" />

      <button 
        type="submit" 
        disabled={isSubmitting} 
        className="bg-blue-600 text-white py-2 px-4 rounded disabled:bg-gray-400 w-full">
        {isSubmitting ? "Guardando..." : initialData ? "Actualizar Actor" : "Registrar Actor"}
      </button>
    </form>
  );
}