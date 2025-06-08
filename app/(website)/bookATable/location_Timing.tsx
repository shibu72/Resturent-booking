"use client";
import dynamic from "next/dynamic";
import React from "react";
import OpeningHours from "./OpeningHours";

const Map = dynamic(() => import("@/components/shared/Map"), { ssr: false });

export default function Location_Timing() {
  return (
    <div className="grid col-span-2 items-center justify-between space-y-6">
      <div className="p-3 bg-white rounded-lg w-[30rem] overflow-hidden">
        <h1 className="text-2xl font-normal mb-4 text-center py-4 border-b-2 border-[--secondary3]">
          Here to Find
        </h1>
        <Map />
      </div>
        <OpeningHours />
    </div>
  );
}
