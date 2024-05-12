"use client";
import React from "react";
import Logo from "../logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  {
    label: "DashBoard",
    path: "/app/dashboard",
  },
  {
    label: "Account",
    path: "/app/account",
  },
];

export default function AppHeader() {
  const activePath = usePathname();

  return (
    <div className=" flex items-center justify-between  border-b-2 border-white/10 py-2">
      <Logo />
      <ul className=" flex  gap-6 text-xs">
        {routes.map((route) => {
          return (
            <li
              className={cn(
                `text-sm text-white/70 rounded-md px-2 py-1 hover:text-white focus:text-white`,
                {
                  "bg-black/10 text-white": activePath === route.path,
                }
              )}
              key={route.path}
            >
              <Link href={route.path}>{route.label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
