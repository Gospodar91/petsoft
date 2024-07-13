"use client";
import { addPet } from "@/actions/actions";
import { TPet, TReactNode } from "@/lib/types";
import React, { createContext, useState } from "react";

type TPetsContextProvide = {
  data: TPet[];
  children: React.ReactNode;
};
type TPetsContex = {
  pets: TPet[];
  selectedPetId: string | null;
  handleChangePetId: (id: string) => void;
  handleCheckoutPet: (id: string) => void;
  handleAddPet: (newPet: Omit<TPet, "id">) => void;
  handleEditPet: (petId: string, newPet: Omit<TPet, "id">) => void;
  selectedPet: TPet | undefined;
  numberOfPers: number;
};

export const PetsContext = createContext<TPetsContex | null>(null);

export default function PetsContextProvider({
  data: pets,
  children,
}: TPetsContextProvide) {
  // после revalidatePath("/app/dashboard", "layout"); в actions.ts
  //в Data приходят новіе данніе по запросу . Но посколько useState инициализируется один раз новіе данніе он не получает
  // поєтому испольуем саму дату
  // const [pets, setPetsData] = useState(data);
  const [selectedPetId, setPetId] = useState<string | null>(null);

  function handleChangePetId(id: string) {
    setPetId(id);
  }
  const selectedPet = pets.find((pet) => pet.id === selectedPetId);
  const numberOfPers = pets.length;

  function handleCheckoutPet(id: string) {
    const filteredWithNiPetArray = pets.filter((pet) => pet.id !== id);
    // setPetsData(filteredWithNiPetArray);
    setPetId(null);
  }
  function handleEditPet(petId: string, newPet: Omit<TPet, "id">) {
    // setPetsData((prev) =>
    //   prev.map((pet) => (pet.id === petId ? { ...newPet, id: petId } : pet))
    // );
  }
  function handleAddPet(newPet: Omit<TPet, "id">) {
    addPet(newPet);
    // setPetsData((prev) => [...prev, { ...newPet, id: Date.now().toString() }]);
  }
  return (
    <PetsContext.Provider
      value={{
        pets,
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
