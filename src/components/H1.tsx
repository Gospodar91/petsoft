import { TReactNode } from "@/lib/types";

export default function H1({ children }: TReactNode) {
  return <h1 className=" text-2xl  leading-6 font-medium">{children}</h1>;
}
