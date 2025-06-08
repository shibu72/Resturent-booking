// import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Title from "@/components/ui/title";
import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";
import { IoLocation } from "react-icons/io5";
import Location_Timing from "./location_Timing";
import ReviewFeedback from "./ReviewFeedback";

export default function Page() {
  return (
    <>
      <div className="m-auto container">
        <div className="grid grid-flow-col items-start justify-between w-full">
          <div className=" w-[1007px] bg-[white] grid items-center m-auto gap-8 p-4 rounded-lg">
            <div>
              <Image
                src={"/images/villagio1.png"}
                alt="restaurant and bar image for Villagio"
                width={977}
                height={504}
              />
              <Title
                colorText="Villagio"
                titleText=""
                className="text-2xl font-mediium border-b-2 py-4 inline-block"
              >
                {"  Restaurant & Bar"}
              </Title>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-[50%] text-[--secondary1]">
                <span className="text-base font-normal flex items-start">
                  <IoLocation size={24} color="var(--secondary3)" />
                  360 San Lorenzo Avenue, Suite <br /> 1430 Coral Gables, FL
                  33146-1865 |
                </span>
                <div className="grid gap-2 items-start justify-start mt-3">
                  <h3 className="text-lg font-bold">Book a table</h3>
                  <div className="flex items-center gap-4">
                    <Input type="date" />
                    <Input type="time" />
                  </div>
                </div>
              </div>

              <div className="flex-[60%] flex gap-4">
                <span>
                  <Menu color="var(--secondary3)" size={24} />
                </span>
                <p className="text-base font-normal text-[--secondary1]">
                  Villagio restaurant and bar has one mission: to provide guests
                  with a fine and fresh seafood experience. Featuring seasonal
                  and sustainable seafood that is flown in fresh daily, our
                  chef-driven menu proves that no matter when you’re dining,
                  seafood can be truly exceptional. to provide guests with a
                  fine{" "}
                  <span className="text-[--secondary3] font-bold">
                    Read More...
                  </span>
                </p>
              </div>
            </div>
            <span>
              <Button className="bg-[--secondary2] w-full text-xl font-normal py-6">
                {" "}
                Book Now{" "}
              </Button>
            </span>
          </div>

          <div>
            <Location_Timing />
          </div>
        </div>

        <ReviewFeedback/>
      </div>
    </>
  );
}
