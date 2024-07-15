import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

type TpetFormBtnProps = { actionType: string };

export default function PetFormBtn({ actionType }: TpetFormBtnProps) {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} className=" mt-5 self-end">
      {" "}
      {actionType === "add" ? "Add" : "Edit"}
    </Button>
  );
}
