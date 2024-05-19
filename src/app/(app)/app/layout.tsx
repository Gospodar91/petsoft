import PetsContextProvider from "@/app/context/PetsContext";
import { SeacrhContextProvider } from "@/app/context/SecrhFormContext";
import BackGroundPatter from "@/components/backGroundPatter";
import AppFooter from "@/components/footer/appFooter";
import AppHeader from "@/components/header/appHeader";
import { TPet, TReactNode } from "@/lib/types";

export default async function Layout({ children }: TReactNode) {
  const petData = await fetch(
    "https://bytegrad.com/course-assets/projects/petsoft/api/pets"
  );
  const parsedPetData: TPet[] = await petData.json();

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
