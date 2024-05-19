"use client";
import { usePetsContext } from "@/lib/hooks";

export default function Stats() {
  const { numberOfPers } = usePetsContext();
  return (
    <section className=" text-center">
      <p className=" text-2xl leading-6 font-bold">{numberOfPers}</p>
      <p className=" opacity-80">current guests</p>
    </section>
  );
}
