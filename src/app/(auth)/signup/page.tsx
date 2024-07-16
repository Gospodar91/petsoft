import AuthForm from "@/components/authForm";
import H1 from "@/components/H1";
import Link from "next/link";
import React from "react";

export default function SignUp() {
  return (
    <main>
      <H1 className="text-center mb-5">Sign up</H1>
      <AuthForm />
      <p className=" text-sm  mt-6  text-zinc-500">
        Already have an account ?{" "}
        <Link className="font-medium" href="/auth/signup">
          Log in
        </Link>
      </p>
    </main>
  );
}
