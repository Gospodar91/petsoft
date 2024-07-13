import PetsContextProvider from "@/app/context/PetsContext";
import { SeacrhContextProvider } from "@/app/context/SecrhFormContext";
import BackGroundPatter from "@/components/backGroundPatter";
import AppFooter from "@/components/footer/appFooter";
import AppHeader from "@/components/header/appHeader";
import prisma from "@/lib/db";
import { TReactNode } from "@/lib/types";

export default async function Layout({ children }: TReactNode) {
  //сам layout ре рендерится и снова получает нівіе данні с ДБ
  const parsedPetData = await prisma.pet.findMany();

  return (
    <>
      <BackGroundPatter />
      <div className=" flex flex-col  max-w-[1050px] mx-auto px-4 min-h-screen">
        <PetsContextProvider data={parsedPetData}>
          <SeacrhContextProvider>
            <AppHeader />
            {children}
            <AppFooter />;
          </SeacrhContextProvider>
        </PetsContextProvider>
      </div>
    </>
  );
}
