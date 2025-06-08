"use client";
import React from "react";
import Hero from "./Hero";
import Service from "@/components/shared/service";
import Showcase from "@/components/shared/showcase";

export default function Main() {
  return (
    <>
      <div className="container m-auto">
        <Hero />
        <Service />
        <Showcase />
      </div>
    </>
  );
}
