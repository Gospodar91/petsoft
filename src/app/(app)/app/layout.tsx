import BackGroundPatter from "@/components/backGroundPatter";
import AppFooter from "@/components/footer/appFooter";
import AppHeader from "@/components/header/appHeader";
import { TReactNode } from "@/lib/types";

export default function Layout({ children }: TReactNode) {
  return (
    <>
      <BackGroundPatter />
      <div className=" max-w-[1050px] mx-auto px-4">
        <AppHeader />
        {children}
        <AppFooter />;
      </div>
    </>
  );
}
