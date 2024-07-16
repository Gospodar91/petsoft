"use server";

import prisma from "@/lib/db";
import { TPetEssential } from "@/lib/types";
import { sleep } from "@/lib/utils";
import { Pet } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function addPet(newPet: TPetEssential) {
  await sleep();
  //в функцию приходит formData из actions формі .Достаем ее
  // По факту не нужен отдельній ендпоинт .Тут он и есть для связи с ORM
  try {
    await prisma.pet.create({
      data: newPet,
    });
  } catch (error) {
    return { message: "Something Wrong" };
  }

  //В revalidatePath передаем путь (структуру папки которую нужно ревалидировать ) и  сам компонент
  revalidatePath("/app", "layout");
}

export async function getPets() {
  return await prisma.pet.findMany();
}

export async function editPet(petID: Pet["id"], newPet: TPetEssential) {
  await sleep();
  //в функцию приходит formData из actions формі .Достаем ее
  // По факту не нужен отдельній ендпоинт .Тут он и есть для связи с ORM
  try {
    await prisma.pet.update({
      where: { id: petID },
      data: newPet,
    });
  } catch (error) {
    return { message: "Something Wrong" };
  }

  //В revalidatePath передаем путь (структуру папки которую нужно ревалидировать ) и  сам компонент
  revalidatePath("/app", "layout");
}

export async function deletePet(petID: Pet["id"]) {
  await sleep();
  try {
    await prisma.pet.delete({
      where: { id: petID },
    });
  } catch (error) {
    return { message: "Something Wrong" };
  }
  revalidatePath("/app", "layout");
}
