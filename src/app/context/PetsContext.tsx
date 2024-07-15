"use client";
import { addPet, deletePet, editPet } from "@/actions/actions";
import { TPet, TReactNode } from "@/lib/types";
import React, { createContext, useOptimistic, useState } from "react";
import { toast } from "sonner";

type TPetsContextProvide = {
  data: TPet[];
  children: React.ReactNode;
};
type TPetsContex = {
  pets: TPet[];
  selectedPetId: string | null;
  handleChangePetId: (id: string) => void;
  handleCheckoutPet: (id: string) => Promise<void>;
  handleAddPet: (newPet: Omit<TPet, "id">) => Promise<void>;
  handleEditPet: (petId: string, newPet: Omit<TPet, "id">) => Promise<void>;
  selectedPet: TPet | undefined;
  numberOfPers: number;
};

export const PetsContext = createContext<TPetsContex | null>(null);

export default function PetsContextProvider({
  data,
  children,
}: TPetsContextProvide) {
  // после revalidatePath("/app/dashboard", "layout"); в actions.ts
  //в Data приходят новіе данніе по запросу . Но посколько useState инициализируется один раз новіе данніе он не получает
  // поєтому испольуем саму дату
  // const [pets, setPetsData] = useState(data);
  const [selectedPetId, setPetId] = useState<string | null>(null);
  /// оптимистичное обновление первій аргумент -(initialState) ,второй аргумент -функция
  // Функця в качествет аргумента по сути имеет prevState для работы с ним .Второй-опитимичтичные данные которые нужно обновить UI
  const [optimisticPets, setOptimisticPets] = useOptimistic(
    data,
    (state, { action, payload }) => {
      switch (action) {
        case "add": {
          return [...state, payload];
        }
        case "remove": {
          return state.filter((pet) => pet.id !== payload);
        }
        case "edit": {
          return state.map((pet) => {
            if (pet.id === payload.petId) {
              return { ...pet, ...payload.newPet };
            }
            return pet;
          });
        }
      }
    }
  );

  async function handleAddPet(newPet: Omit<TPet, "id">) {
    setOptimisticPets({ action: "add", payload: newPet });
    //addPet(newPet) - Server action
    const error = await addPet(newPet);
    if (error?.message) {
      toast.error(error.message);
    }
  }

  function handleChangePetId(id: string) {
    setPetId(id);
  }
  const selectedPet = optimisticPets.find((pet) => pet.id === selectedPetId);
  const numberOfPers = optimisticPets.length;

  async function handleCheckoutPet(id: string) {
    setOptimisticPets({ action: "remove", payload: id });
    await deletePet(id);
    setPetId(null);
  }
  async function handleEditPet(petId: string, newPet: Omit<TPet, "id">) {
    setOptimisticPets({ action: "edit", payload: { petId, newPet } });
    const error = await editPet(petId, newPet);
    if (error?.message) {
      toast.error(error.message);
    }
  }

  return (
    <PetsContext.Provider
      value={{
        pets: optimisticPets,
        selectedPetId,
        handleChangePetId,
        selectedPet,
        numberOfPers,
        handleCheckoutPet,
        handleAddPet,
        handleEditPet,
      }}
    >
      {children}
    </PetsContext.Provider>
  );
}
