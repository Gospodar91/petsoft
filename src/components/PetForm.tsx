"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { usePetsContext } from "@/lib/hooks";
import { addPet, editPet } from "@/actions/actions";
import PetFormBtn from "./petFormBtn";
import { useFormState } from "react-dom";
import { toast } from "sonner";

type TFormProps = {
  actionType: "add" | "edit";
  onFormSubmission: () => void;
};

export default function PetForm({ actionType, onFormSubmission }: TFormProps) {
  const { handleAddPet, selectedPet, handleEditPet } = usePetsContext();
  // const [error, setFormState] = useFormState(addPet, {});
  // console.log("state", state);
  return (
    <form
      action={async (formData) => {
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
            name="name"
            type="text"
            required
            defaultValue={actionType === "edit" ? selectedPet?.name : ""}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="ownerName">Owner Name</Label>

          <Input
            name="ownerName"
            id="ownerName"
            type="text"
            required
            defaultValue={actionType === "edit" ? selectedPet?.ownerName : ""}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="imageUrl">Image Url</Label>

          <Input
            name="imageUrl"
            id="imageUrl"
            type="text"
            defaultValue={actionType === "edit" ? selectedPet?.imageUrl : ""}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="age">Age</Label>
          <Input
            name="age"
            required
            id="age"
            type="number"
            defaultValue={actionType === "edit" ? selectedPet?.age : ""}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="notes">Notes</Label>
          <Textarea
            required
            name="notes"
            id="notes"
            rows={3}
            defaultValue={actionType === "edit" ? selectedPet?.notes : ""}
          />
        </div>
      </div>
      <PetFormBtn actionType={actionType} />
    </form>
  );
}

{
  /* <Label htmlFor="email">Your email address</Label> */
}
