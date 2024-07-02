import React from "react";
import { Button } from "./ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PetForm from "./PetForm";

type TButtonProps = {
  actionType: "add" | "edit" | "checkout";
  children?: React.ReactNode;
  onClick?: () => void;
};

export default function petButtons({
  actionType,
  children,
  onClick,
}: TButtonProps) {
  if (actionType === "add" || actionType === "edit") {
    return (
      <>
        <Dialog>
          <DialogTrigger asChild>
            {actionType === "add" ? (
              <Button size={"icon"}>
                <PlusIcon className=" h-6 w-6" />
              </Button>
            ) : (
              <Button variant={"secondary"}>{children}</Button>
            )}
          </DialogTrigger>
          <DialogHeader>
            <DialogTitle>
              {actionType === "add" ? "Add pet" : "Edit pet"}
              <DialogDescription></DialogDescription>
            </DialogTitle>
            <DialogContent>
              <PetForm />
            </DialogContent>
          </DialogHeader>
        </Dialog>
      </>
    );
  }
  // if (actionType === "edit") {
  //   return <Button variant={"secondary"}>{children}</Button>;
  // }
  if (actionType === "checkout") {
    return (
      <Button onClick={onClick} variant={"secondary"}>
        {children}
      </Button>
    );
  }
}
