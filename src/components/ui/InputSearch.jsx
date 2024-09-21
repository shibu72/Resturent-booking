import React from "react";
import { IoSearchCircleSharp } from "react-icons/io5";

export default function InputSearch() {
  return (
    <>
      <div className="border rounded-full flex items-center justify-center w-full">
        <input type="search" className="rounded-full w-full p-2 outline-none" placeholder="Serch food" />
        <button>
          <IoSearchCircleSharp className="text-primary text-5xl" />
        </button>
      </div>
    </>
  );
}
