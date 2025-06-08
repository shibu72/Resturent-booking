import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import { Button } from "../ui/button";

const nav = [
  { title: "Home", key: "/" },
  { title: "Boot A Table", key: "/bookATable" },
  { title: "Food", key: "/food" },
  { title: "Dashboard", key: "/dashboard" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between container m-auto pt-10 bg-transparent ">
      <div>
        <Link href={"/"}>
          <Image src={Logo} width={199} height={50} alt="logo" />
        </Link>
      </div>
      <div className="flex space-x-20 items-center justify-center text-2xl font-normal">
        {nav.map((nav, index) => (
          <Link key={index} href={nav.key}>
            {nav.title}
          </Link>
        ))}
      </div>
      <div className="space-x-4">
        <Button className="rounded-xl bg-[--secondary3] font-semibold shadow-sm shadow-[--primaryBlack] hover:focus:shadow-inner hover:bg-[--secondary3] :focus:bg-[--secondary3]">
          Download App
        </Button>

        <Link href={"/profile"}>
          <Button className="rounded-xl bg-transparent text-black font-semibold shadow-sm shadow-[--primaryBlack] hover:focus:shadow-inner focus:border-none hover:bg-transparent active:bg-transparent">
            My Profile
          </Button>
        </Link>
      </div>
    </nav>
  );
}
