"use client";
// import Image from "next/image";
import React from "react";
import { LoginForm } from "./loginForm";
import Link from "next/link";

function Page() {
  return (
    <>
      <LoginForm />

      <div className="text-lg font-normal flex justify-between items-center mt-6">
        <span>New Here?</span>
        <Link
          className="text-[--secondary3] px-2 py-1 border-b border-[--secondary3]"
          href={"/signup"}
        >
          Create your account
        </Link>
      </div>
    </>
  );
}

export default Page;
