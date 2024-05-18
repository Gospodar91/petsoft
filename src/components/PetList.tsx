import { TPet } from "@/lib/types";
import Image from "next/image";

type TPetlistProp = {
  pets: TPet[];
};

export default function PetList({ pets }: TPetlistProp) {
  return (
    <ul>
      {pets.map((pet) => {
        return (
          <li className=" bg-white  border-b-2 border-black/[0.08] px-5 ">
            <button className=" flex items-center gap-4  text-base w-full h-[70px] cursor-pointer  transition hover:bg-[#EFF1F2] focus:bg-[#EFF1F2]">
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
