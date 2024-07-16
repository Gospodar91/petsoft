import { Pet } from "@prisma/client";

export type TReactNode = {
  children: React.ReactNode;
};

export type TPetEssential = Omit<Pet, "id" | "createdAt" | "updatedAt">;

// получаем модель из призмі и редактурием ее под наш кейс.Но все равно при получении с бека используем иногда модель PET
