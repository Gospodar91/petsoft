"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { usePetsContext } from "@/lib/hooks";
import PetFormBtn from "./petFormBtn";
import { useForm } from "react-hook-form";

type TFormProps = {
  actionType: "add" | "edit";
  onFormSubmission: () => void;
};

type TUseFormProps = {
  name: string;
  ownerName: string;
  imageUrl: string;
  age: number;
  notes: string;
};
export default function PetForm({ actionType, onFormSubmission }: TFormProps) {
  const { handleAddPet, selectedPet, handleEditPet } = usePetsContext();
  // const [error, setFormState] = useFormState(addPet, {});
  // console.log("state", state);

  const {
    register,
    formState: { errors, isSubmitting },
    trigger,
  } = useForm<TUseFormProps>();

  return (
    <form
      action={async (formData) => {
        const resultOfValidation = await trigger();
        if (!resultOfValidation) {
          return;
        }
        onFormSubmission();

        const newPet = {
          name: formData.get("name") as string,
          ownerName: formData.get("ownerName") as string,
          imageUrl:
            (formData.get("imageUrl") as string) ||
            ("https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png" as string),
          age: Number(formData.get("age")),
          notes: formData.get("notes") as string,
        };

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
