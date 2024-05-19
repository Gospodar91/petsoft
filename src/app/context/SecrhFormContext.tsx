"use client";
import { TReactNode } from "@/lib/types";
import React, { createContext, useState } from "react";

type TSeacrchContext = {
  seacrhQuery: string;
  handleSearchQuery: (newValue: string) => void;
};

export const SerachTextContext = createContext<TSeacrchContext | null>(null);

export function SeacrhContextProvider({ children }: TReactNode) {
  const [seacrhQuery, setseacrhQuery] = useState("");
  if (!SerachTextContext) {
    throw new Error("This is context serach form error");
  }

  function handleSearchQuery(newValue: string) {
    setseacrhQuery(newValue);
  }
  return (
    <SerachTextContext.Provider value={{ seacrhQuery, handleSearchQuery }}>
      {children}
    </SerachTextContext.Provider>
  );
}
