"use client";
import Image from "next/image";
import React from "react";
// import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      style={{ backgroundImage: "url(/images/BGExport.png)" }}
      className="flex items-center justify-center h-screen bg-cover bg-no-repeat bg-top"
    >
      <div className="container w-[70%] flex items-center justify-evenly content-center gap-10 border-4 p-10 rounded-2xl">
        <Image width={500} height={500} src={"/auth.png"} alt="table" />

        <div className="grid items-stretch justify-center gap-6 w-full text-[--secondary1] ">
          <Image width={400} height={400} src={"/Logo.png"} alt="logo" />
          <div>
            <h2 className="text-3xl font-semibold m-auto mb-4">
              Great to have you back!
            </h2>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
