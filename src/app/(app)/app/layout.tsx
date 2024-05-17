import BackGroundPatter from "@/components/backGroundPatter";
import AppFooter from "@/components/footer/appFooter";
import AppHeader from "@/components/header/appHeader";
import { TReactNode } from "@/lib/types";

export default function Layout({ children }: TReactNode) {
  return (
    <>
      <BackGroundPatter />
      <div className=" flex flex-col  max-w-[1050px] mx-auto px-4 min-h-screen">
        <AppHeader />
        {children}
        <AppFooter />;
      </div>
    </>
  );
}
