"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";

interface NavbarProps {
  username: string;
  avatarUrl: string;
  session: any;
}

const Navbar: React.FC<NavbarProps> = ({ username, avatarUrl, session }) => {
  return (
    <nav className="w-full bg-white shadow-md px-2 md:px-6 py-1 md:py-3 rounded-md flex justify-between items-center">
      {/* Left: Site Title */}
      <div className="text-2xl font-bold text-gray-800">CXP</div>

      {/* Right: Welcome + Avatar + Logout */}
      <div
        onClick={() => {
          console.log({ session });
        }}
        className="flex items-center space-x-4"
      >
        <span className="text-gray-700 hidden md:inline">
          Welcome, {username}
        </span>
        <img
          src={avatarUrl}
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
        />
        <button
          onClick={() => signOut()}
          className="text-gray-600 hover:text-red-500 transition-colors"
        >
          <LogOut size={22} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
