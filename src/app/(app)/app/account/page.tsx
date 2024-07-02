import ContentBlock from "@/components/ContentBlock";
import H1 from "@/components/H1";
import React from "react";

export default function Account() {
  return (
    <main>
      <H1 className=" text-white my-8">Your account page</H1>
      <ContentBlock className=" h-[500px] flex items-center justify-center">
        ...yu logged in as LOLOLO
      </ContentBlock>
    </main>
  );
}
