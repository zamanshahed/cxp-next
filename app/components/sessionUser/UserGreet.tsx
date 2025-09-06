"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";

type Props = {
  session: any;
};

function UserGreet({ session }: Props) {
  return (
    <div>
      <span onClick={() => console.log({ session })}>
        Welcome, {session.user?.name}
      </span>
      <Button variant={"outline"} onClick={() => signOut()}>
        Logout
      </Button>
    </div>
  );
}

export default UserGreet;
