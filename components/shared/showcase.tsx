import Image from "next/image";
import React from "react";
import PlaySection from "@/assets/paly-section.png";
import Title from "../ui/title";
import { Button } from "../ui/button";

export default function Showcase() {
  return (
    <div className="mt-40 py-10">
      <div className="flex items-center justify-between gap-10">
        <div className="grid gap-6 flex-[50%] items-center">
          <Title
            titleText=" It’s Now More Easy to "
            colorText=" Booking "
            className="text-[64px] font-bold"
          >
            {" by Our Mobile App "}
          </Title>
          <p className="text-2xl font-normal">
            All you need to do is downlode one of the best delivery apps, make a
            and most companies are opting for mobile app devlopment for food
            delivery
          </p>

          <div className="flex items-center justify-start gap-6">
            <Button className="flex items-center w-fit h-fit rounded-xl hover:bg-white hover:text-[--primaryBlack]">
              <Image
                src={"/images/Google Play logo.png"}
                alt="google-play-logo"
                width={33}
                height={36}
                className="w-full"
              />
              <div className="grid items-center justify-items-center">
                <span>GET IT ON</span>
                <span className="text-2xl font-semibold">Google Play</span>
              </div>
            </Button>

            <Button className="flex items-center w-fit h-fit rounded-xl hover:bg-white hover:text-[--primaryBlack]">
              <span className="text-5xl"></span>
              <div className="grid items-center justify-items-start">
                <span>Download on the</span>
                <span className="text-2xl font-semibold">App Store</span>
              </div>
            </Button>
          </div>
        </div>
        {/* <div className="flex-[50%] m-auto"> */}
        <Image src={PlaySection} alt="play-section" width={550} height={550} />
        {/* </div> */}
      </div>
    </div>
  );
}
