import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImage from "../../public/logo.svg";
export default function logo() {
  return (
    <Link href={"/"}>
      <Image src={logoImage} alt="not found logo" />
    </Link>
  );
}
