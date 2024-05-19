import { PetsContext } from "@/app/context/PetsContext";
import { SerachTextContext } from "@/app/context/SecrhFormContext";
import { useContext } from "react";

export function usePetsContext() {
  const context = useContext(PetsContext);
  if (!context) throw new Error();
  return context;
}
export function useSearchFormContext() {
  const context = useContext(SerachTextContext);
  if (!context) throw new Error();
  return context;
}
