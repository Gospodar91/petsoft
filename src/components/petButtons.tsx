"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PetForm from "./PetForm";
import { flushSync } from "react-dom";

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
  const [isOpenModal, setIsOpenModal] = useState(false);
  if (actionType === "add" || actionType === "edit") {
    return (
      <>
        <Dialog open={isOpenModal} onOpenChange={setIsOpenModal}>
          <DialogTrigger asChild>
            {actionType === "add" ? (
              <Button size={"icon"}>
                <PlusIcon className=" h-6 w-6" />
              </Button>
            ) : (
              <Button variant={"secondary"}>{children}</Button>
            )}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {actionType === "add" ? "Add pet" : "Edit pet"}
              </DialogTitle>
              <PetForm
                onFormSubmission={() => flushSync(() => setIsOpenModal(false))}
                actionType={actionType}
              />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </>
    );
  }

  if (actionType === "checkout") {
    return (
      <Button onClick={onClick} variant={"secondary"}>
        {children}
      </Button>
    );
  }
}
