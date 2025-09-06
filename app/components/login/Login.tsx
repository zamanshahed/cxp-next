"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

type Props = {};

function Login({}: Props) {
  return (
    <div>
      <Button
        className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2"
        onClick={() => signIn("strava")}
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8 0-4.411 3.589-8 8-8 4.411 0 8 3.589 8 8 0 4.411-3.589 8-8 8zm-.5-13h1v6h-1V7zm0 8h1v2h-1v-2z" />
        </svg>
        Login with Strava
      </Button>
      {/* <Image src={"/cover.png"} alt="cover" fill className="object-cover" /> */}
    </div>
  );
}

export default Login;
