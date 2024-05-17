import Image from "next/image";
export default function PetList() {
  return (
    <ul>
      <li className=" bg-white  border-b-2 border-black/[0.08] ">
        <button className=" flex items-center gap-4  text-base w-full h-[70px] cursor-pointer  transition hover:bg-[#EFF1F2] focus:bg-[#EFF1F2]">
          <Image
            className=" rounded-full object-cover"
            src={
              "https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png"
            }
            alt="No pet image"
            width={45}
            height={45}
          />
          <p className="  font-semibold">Benjamin</p>
        </button>
      </li>
    </ul>
  );
}
