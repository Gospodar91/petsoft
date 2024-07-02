import { TReactNode } from "@/lib/types";
import { cn } from "@/lib/utils";
type TContentBlock = {
  children: React.ReactNode;
  className?: string;
};

export default function ContentBlock({ children, className }: TContentBlock) {
  return (
    <div
      className={cn(
        " w-full h-full shadow-sm bg-[#F7F8FA] rounded-md overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
