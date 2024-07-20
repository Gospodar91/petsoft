import { Label } from "@radix-ui/react-label";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { login } from "@/actions/actions";

export default function AuthForm({ type }: { type: "login" | "signup" }) {
  return (
    <form action={login}>
      <div className="space-y-2 mb-2">
        <Label htmlFor="email">Email</Label>
        <Input name="email" id="email" type="email" />
      </div>
      <div className="space-y-2 mb-2">
        <Label htmlFor="passsword">Passsword</Label>
        <Input name="password" id="passsword" type="passsword" />
      </div>
      <Button className="mt-4" type="submit">
        {type === "login" ? "Log in" : "Sign up"}
      </Button>
    </form>
  );
}
