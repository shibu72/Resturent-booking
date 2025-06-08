"use client";
import { GiHotMeal } from "react-icons/gi";
import { MdLocalShipping } from "react-icons/md";
import React from "react";
import { DataTable } from "./dataTable";
import RecentMenu from "./recentMenu";

function Page() {
  return (
    <>
      <>
        <div className="flex flex-col xl:flex-row   gap-6 ">
          <div className=" bg-[--secondary3] text-[--primaryWhite] rounded-lg flex flex-[50%] items-center justify-start p-4 space-x-4 ">
            <div className="p-4 bg-[--primaryWhite] text-[--primaryBlack] rounded-full w-fit">
              <GiHotMeal className="text-5xl text-[--primaryBlack2]" />
            </div>
            <div className="text-4xl font-medium font-roboto">
              <p className="text-2xl font-normal font-kumbh">Total Menu</p>
              <h2>518</h2>
            </div>
          </div>

          <div className=" bg-[--secondary3] text-[--primaryWhite] rounded-lg border flex flex-[50%] items-center justify-start p-4 space-x-4 ">
            <div className="p-4 bg-[--primaryWhite] text-[--primaryBlack] rounded-full w-fit">
              <MdLocalShipping className="text-5xl text-[--secondary3]" />
            </div>
            <div className="text-4xl font-medium font-roboto">
              <p className="text-2xl font-normal font-kumbh">Total Order</p>
              <h2>$78464</h2>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[--secondary3]">
            Recent Order List
          </h2>
          <div className="bg-[secondary3]">
            <DataTable />
          </div>
        </div>

        <div className="">
          <h2 className="text-2xl font-bold text-[--secondary3]">
            Recent Menu List
          </h2>
          <div className="flex flex-row flex-wrap gap-2 justify-start items-center mt-5">
            <RecentMenu />
          </div>
        </div>
      </>
    </>
  );
}

export default Page;
