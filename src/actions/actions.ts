"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addPet(formData) {
  //в функцию приходит formData из actions формі .Достаем ее
  // По факту не нужен отдельній ендпоинт .Тут он и есть для связи с ORM
  await prisma.pet.create({
    data: {
      name: formData.get("name"),
      ownerName: formData.get("ownerName"),
      imageUrl:
        formData.get("imageUrl") ||
        "https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png",
      age: parseInt(formData.get("age")),
      notes: formData.get("notes"),
    },
  });
  //В revalidatePath передаем путь (структуру папки которую нужно ревалидировать ) и  сам компонент
  revalidatePath("/app", "layout");
}

export async function getPets() {
  return await prisma.pet.findMany();
}
