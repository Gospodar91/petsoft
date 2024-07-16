import { Label } from "@radix-ui/react-label";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function AuthForm() {
  return (
    <form>
      <div className="space-y-2 mb-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" />
      </div>
      <div className="space-y-2 mb-2">
        <Label htmlFor="passsword">Passsword</Label>
        <Input id="passsword" type="passsword" />
      </div>
      <Button className="mt-4" type="submit">
        Log in
      </Button>
    </form>
  );
}
