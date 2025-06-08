"use client";
import Image from "next/image";
import React from "react";
import Title from "../ui/title";
import WhoWe from "@/assets/who-we.png";

interface serviceType {
  title: string;
  icon: string;
}

const services: serviceType[] = [
  { title: "online ordering", icon: "/images/online order.png" },
  { title: "24/7 Availability", icon: "/images/7 support.png" },
  { title: "Advanced Reservations", icon: "/images/Group.png" },
  { title: "Curated Dining Spaces", icon: "/images/Beach Dinner.png" },
  { title: "Top Chefs", icon: "/images/chef.png" },
  { title: "Immaculate Kitchens", icon: "/images/Kitchen.png" },
];

export default function Service() {
  return (
    <div className="mt-40 py-10">
      <div className="flex items-end justify-between space-x-8">
        <div className="flex-[50%]">
          <Image src={WhoWe} alt="" width={1000} height={1000} />
        </div>
        <div className="flex-[50%] grid gap-6">
          <Title
            titleText="We are "
            colorText=" more "
            className="text-6xl font-bold leading-normal"
          >
            than <span className="text-[--secondary2]">multiple</span> service
          </Title>

          <p className="text-[--secondary2] text-lg font-normal">
            This is a type of resturent which typically serves food and drink,
            in addition to light refreshments such as baked goods or snacks. The
            term comes frome the rench word meaning food
          </p>

          <div className="grid grid-cols-2 items-center justify-start justify-items-start gap-6">
            {services.map((item: serviceType, i: number) => (
              <div key={i} className="flex items-center justify-center gap-2">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="w-6 h-6"
                />
                <span className="capitalize text-lg font-medium">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}
