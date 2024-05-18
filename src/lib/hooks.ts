import { PetsContext } from "@/app/context/PetsContext";
import { useContext } from "react";

export function usePetsContext() {
  const context = useContext(PetsContext);
  if (!context) throw new Error();
  return context;
}
