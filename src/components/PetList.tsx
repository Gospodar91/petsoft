"use client";
import { usePetsContext, useSearchFormContext } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import Image from "next/image";

// type TPetlistProp = {
//   pets: TPet[];
// };

export default function PetList() {
  const { pets, handleChangePetId, selectedPetId } = usePetsContext();
  const { seacrhQuery } = useSearchFormContext();
  const filteredPers = pets.filter((pet) =>
    pet.name.toLocaleLowerCase().includes(seacrhQuery)
  );

  return (
    <ul>
      {filteredPers.map((pet) => {
        return (
          <li key={pet.id} className=" bg-white  border-b-2 border-light ">
            <button
              onClick={() => handleChangePetId(pet.id)}
              className={cn(
                " px-5 flex items-center gap-4  text-base w-full h-[70px] cursor-pointer  transition hover:bg-[#EFF1F2]  focus:bg-[#EFF1F2]",
                {
                  "bg-[#EFF1F2]": pet.id === selectedPetId,
                }
              )}
            >
              <Image
                className=" w-[45px] h-[45px] rounded-full object-cover"
                src={pet.imageUrl}
                alt="No pet image"
                width={45}
                height={45}
              />
              <p className="  font-semibold">{pet.name}</p>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
