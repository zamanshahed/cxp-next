"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";

type Props = {
  session: any;
};

function UserGreet({ session }: Props) {
  return (
    <div>
      <span onClick={() => console.log({ session })}>
        Welcome, {session.user?.name}
        <span className="ml-2">
          <Image
            src={session.user?.image}
            alt="profile"
            width={50}
            height={50}
            className="rounded-full border-emerald-500 border-2"
          />
        </span>
      </span>
      <Button variant={"outline"} onClick={() => signOut()}>
        Logout
      </Button>
    </div>
  );
}

export default UserGreet;
