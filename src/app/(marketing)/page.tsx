import Logo from "@/components/logo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#5dc9a8] min-h-screen flex items-center justify-center flex-col xl:flex-row gap-10">
      <Image
        src={
          "https://bytegrad.com/course-assets/react-nextjs/petsoft-preview.png"
        }
        width={519}
        height={472}
        alt=""
      />

      <div>
        <Logo />
        <h1 className="text-5xl font-semibold my-6 max-w-[500px] ">
          Manage your
          <span className=" font-extrabold">pet daycare </span>with ease
        </h1>
        <p className=" text-2xl font-medium max-w-[600px] ">
          Use petsoft to easily keep track of pets under your care .Get lifetime
          for 299 $
        </p>
      </div>
    </main>
  );
}
