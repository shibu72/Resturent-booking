"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { AlignJustifyIcon, Bell } from "lucide-react";

function Navbar() {
  const handleSidebar = () => {
    alert("hello");
  };
  return (
    <>
      <nav className="flex items-center fixed z-10 top-0 right-0 justify-between bg-[--secondary1] text-[--primaryWhite] h-20 w-[calc(100%-245px)]">
        <div className="text-4xl font-medium flex items-center justify-center gap-4">
          <AlignJustifyIcon className="w-10 h-10" onClick={handleSidebar} />
          <span>Dashboard</span>
        </div>

        <div className="flex gap-6 mr-8">
          <div
            className="p-2 bg-[--primaryWhite] text-black rounded-full text-xs relative hover:cursor-pointer"
            title="total notification"
          >
            <Bell />
            <span className="absolute top-0 right-1 w-4 h-4 text-[--primaryWhite] text-center m-auto bg-red-500 rounded-full">
              1
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span>Akash</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
