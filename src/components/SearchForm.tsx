"use client";

import { useSearchFormContext } from "@/lib/hooks";

export default function SearchForm() {
  const { seacrhQuery, handleSearchQuery } = useSearchFormContext();

  return (
    <form className=" w-full h-full">
      <input
        className=" w-full h-full px-5 rounded-md outline-none bg-white/20  placeholder:text-white/50 focus:text-white/50 hover:text-white/50"
        type="search"
        value={seacrhQuery}
        onChange={(e) => handleSearchQuery(e.target.value)}
      />
    </form>
  );
}
