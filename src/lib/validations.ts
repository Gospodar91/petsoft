import { z } from "zod";

export const petIdValidation = z.string().cuid();

export const petFormZodValidation = z
  .object({
    name: z.string().trim().min(3, "Too small name").max(100),
    ownerName: z.string().trim().min(3, "Too small owner name").max(100),
    imageUrl: z.union([
      z.literal(""),
      z.string().trim().url({ message: "Invalid URL" }),
    ]),
    age: z.coerce.number().int().positive(),
    notes: z.union([z.literal(""), z.string().trim().max(1000)]),
  })
  // Default image URL но они не работают в Server actions
  .transform((data) => ({
    ...data,
    imageUrl:
      data.imageUrl ||
      "https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png",
  }));

//что б не типизировать дважді можно наследовать тип из схемі зода
export type TUseForm = z.infer<typeof petFormZodValidation>;
