"use client";
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
  selectedPet: TPet | undefined;
  numberOfPers: number;
};

export const PetsContext = createContext<TPetsContex | null>(null);

export default function PetsContextProvider({
  data,
  children,
}: TPetsContextProvide) {
  const [pets, setPetsData] = useState(data);
  const [selectedPetId, setPetId] = useState<string | null>(null);

  function handleChangePetId(id: string) {
    setPetId(id);
  }
  const selectedPet = pets.find((pet) => pet.id === selectedPetId);
  const numberOfPers = pets.length;

  return (
    <PetsContext.Provider
      value={{
        pets,
        selectedPetId,
        handleChangePetId,
        selectedPet,
        numberOfPers,
      }}
    >
      {children}
    </PetsContext.Provider>
  );
}