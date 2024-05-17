import { TReactNode } from "@/lib/types";

export default function ContentBlock({ children }: TReactNode) {
  return (
    <div className=" w-full h-full shadow-sm bg-[#F7F8FA] rounded-md overflow-hidden">
      {children}
    </div>
  );
}
