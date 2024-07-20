"use server";

import { signIn } from "@/lib/auth";
import prisma from "@/lib/db";
import { sleep } from "@/lib/utils";
import { petFormZodValidation, petIdValidation } from "@/lib/validations";
import { revalidatePath } from "next/cache";

export async function login(formData: FormData) {
  const authData = Object.fromEntries(formData.entries());

  //спец функция некст аус.Говорим что авторизация по нашим кредам
  signIn("credentials", authData);
}

export async function addPet(newPet: unknown) {
  //ставим unknown так как у unknow нет редактируеміх свойст .нельзя записать pet.age=rm-rf .
  await sleep();
  // проверяем точно ли соответствует наша схема тому что нужно
  const validatedPet = petFormZodValidation.safeParse(newPet);
  if (!validatedPet.success) {
    return { message: "Something Wrong" };
  }
  //в функцию приходит formData из actions формі .Достаем ее
  // По факту не нужен отдельній ендпоинт .Тут он и есть для связи с ORM
  try {
    await prisma.pet.create({
      data: validatedPet.data,
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

export async function editPet(petID: unknown, newPet: unknown) {
  await sleep();
  //в функцию приходит formData из actions формі .Достаем ее
  // По факту не нужен отдельній ендпоинт .Тут он и есть для связи с ORM
  const validateidPet = petIdValidation.safeParse(petID);
  const validatedPet = petFormZodValidation.safeParse(newPet);
  if (!validatedPet.success || !validateidPet.success) {
    return { message: "Something Wrong" };
  }
  try {
    await prisma.pet.update({
      where: { id: validateidPet.data },
      data: validatedPet.data,
    });
  } catch (error) {
    return { message: "Something Wrong" };
  }

  //В revalidatePath передаем путь (структуру папки которую нужно ревалидировать ) и  сам компонент
  revalidatePath("/app", "layout");
}

export async function deletePet(petID: unknown) {
  await sleep();

  const validateidPet = petIdValidation.safeParse(petID);
  if (!validateidPet.success) {
    return { message: "Something Wrong" };
  }
  try {
    await prisma.pet.delete({
      where: { id: validateidPet.data },
    });
  } catch (error) {
    return { message: "Something Wrong" };
  }
  revalidatePath("/app", "layout");
}
