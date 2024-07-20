import AuthForm from "@/components/authForm";
import H1 from "@/components/H1";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <main>
      <H1 className="text-center mb-5">Log in</H1>
      <AuthForm type="login" />
      <p className=" text-sm  mt-6  text-zinc-500">
        No Account yet?{" "}
        <Link className="font-medium" href="/auth/signup">
          Sign up
        </Link>
      </p>
    </main>
  );
}
