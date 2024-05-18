"use client";
import { TPet, TReactNode } from "@/lib/types";
import React, { createContext, useState } from "react";

type TPetsContextProvide = {
  data: TPet[];
  children: React.ReactNode;
};
type TPetsContex = {
  pets: TPet[];
  petId: string | null;
};

export const PetsContext = createContext<TPetsContex | null>(null);

export default function PetsContextProvider({
  data,
  children,
}: TPetsContextProvide) {
  const [pets, setPetsData] = useState(data);
  const [petId, setPetId] = useState(null);
  return (
    <PetsContext.Provider value={{ pets, petId }}>
      {children}
    </PetsContext.Provider>
  );
}
