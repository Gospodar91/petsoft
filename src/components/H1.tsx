import { cn } from "@/lib/utils";
type TH1Props = {
  children: React.ReactNode;
  className?: string;
};
export default function H1({ children, className }: TH1Props) {
  return (
    <h1 className={cn(" text-2xl  leading-6 font-medium", className)}>
      {children}
    </h1>
  );
}
