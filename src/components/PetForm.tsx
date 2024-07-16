"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { usePetsContext } from "@/lib/hooks";
import PetFormBtn from "./petFormBtn";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { petFormZodValidation, TUseForm } from "@/lib/validations";

type TFormProps = {
  actionType: "add" | "edit";
  onFormSubmission: () => void;
};

export default function PetForm({ actionType, onFormSubmission }: TFormProps) {
  const { handleAddPet, selectedPet, handleEditPet } = usePetsContext();
  // const [error, setFormState] = useFormState(addPet, {});
  // console.log("state", state);

  const {
    register,
    formState: { errors, isSubmitting },
    trigger,
    getValues,
  } = useForm<TUseForm>({
    resolver: zodResolver(petFormZodValidation),
    defaultValues: {
      name: selectedPet?.name,
      ownerName: selectedPet?.ownerName,
      imageUrl: selectedPet?.imageUrl,
      age: selectedPet?.age,
      notes: selectedPet?.notes,
    },
  });

  return (
    <form
      action={async (formData) => {
        const resultOfValidation = await trigger();
        if (!resultOfValidation) {
          return;
        }
        onFormSubmission();

        const newPet = getValues();
        //Проверка потому что трансформа нет в ServerActions и defaultValues не работают
        newPet.imageUrl =
          newPet.imageUrl ||
          "https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png";
        if (actionType === "add") {
          await handleAddPet(newPet);
        } else if (actionType === "edit") {
          await handleEditPet(selectedPet!.id, newPet);
        }
      }}
      // action={setFormState}
      className=" flex flex-col"
    >
      <div className=" space-y-3">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            {...register("name", {
              required: "Cannot be  emty",
              minLength: { value: 3, message: "Min length is 3" },
            })}
          />
          {errors.name && (
            <p className="  text-red-500">{errors.name.message} </p>
          )}
        </div>
        <div className="space-y-1">
          <Label htmlFor="ownerName">Owner Name</Label>

          <Input id="ownerName" {...register("ownerName")} />
          {errors.ownerName && (
            <p className="  text-red-500">{errors.ownerName.message} </p>
          )}
        </div>
        <div className="space-y-1">
          <Label htmlFor="imageUrl">Image Url</Label>

          <Input id="imageUrl" {...register("imageUrl")} />
          {errors.imageUrl && (
            <p className=" text-red-500">{errors.imageUrl.message}</p>
          )}
        </div>
        <div className="space-y-1">
          <Label htmlFor="age">Age</Label>
          <Input {...register("age")} id="age" />
          {errors.age && (
            <p className="  text-red-500">{errors.age.message} </p>
          )}
        </div>
        <div className="space-y-1">
          <Label htmlFor="notes">Notes</Label>
          <Textarea id="notes" {...register("notes")} />
          {errors.notes && (
            <p className=" text-red-500">{errors.notes.message}</p>
          )}
        </div>
      </div>
      <PetFormBtn actionType={actionType} />
    </form>
  );
}

{
  /* <Label htmlFor="email">Your email address</Label> */
}
