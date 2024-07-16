"use client";
import Image from "next/image";
import { usePetsContext } from "@/lib/hooks";
import { Pet } from "@prisma/client";
import PetButtons from "./petButtons";
import { deletePet } from "@/actions/actions";
import { useTransition } from "react";

type TgeneralProps = {
  pet: Pet;
};

export default function PetDetails() {
  const { selectedPet, handleCheckoutPet } = usePetsContext();
  return (
    <section className="flex flex-col w-full h-full">
      {!selectedPet ? (
        <EmptyView />
      ) : (
        <>
          {" "}
          <TopBar pet={selectedPet} />
          <OtherInfo pet={selectedPet} />
          <Notes pet={selectedPet} />
        </>
      )}
    </section>
  );
}

function TopBar({ pet }: TgeneralProps) {
  const { handleCheckoutPet } = usePetsContext();
  return (
    <div className="  bg-white flex px-5 py-6 items-center  border-b-2  border-light">
      <Image
        src={pet?.imageUrl!}
        alt="no pet image"
        width={45}
        height={45}
        className=" w-[75px] h-[75px] rounded-full object-cover"
      />
      <h2 className=" text-3xl font-semibold  leading-7  ml-5">{pet.name}</h2>
      <div className=" ml-auto space-x-3">
        <PetButtons actionType="edit">Edit</PetButtons>
        <PetButtons
          onClick={async () => {
            await handleCheckoutPet(pet.id);
          }}
          actionType="checkout"
        >
          Checkout
        </PetButtons>
      </div>
    </div>
  );
}

function OtherInfo({ pet }: TgeneralProps) {
  return (
    <div className=" flex justify-around py-10 px-5">
      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">
          {" "}
          Owner Name{" "}
        </h3>
        <p className=" mt-1 text-lg text-zinc-700 "> {pet?.ownerName}</p>
      </div>
      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">
          {" "}
          Pets age{" "}
        </h3>
        <p className=" mt-1 text-lg text-zinc-700 "> {pet?.age}</p>
      </div>
    </div>
  );
}

function Notes({ pet }: TgeneralProps) {
  return (
    <div className="flex-1  py-7 px-5 rounded-md  my-5 mx-9 text-center bg-white">
      {pet?.notes}
    </div>
  );
}

function EmptyView() {
  return (
    <p className=" h-full flex  justify-center items-center text-2xl">
      {" "}
      No pet selected
    </p>
  );
}
