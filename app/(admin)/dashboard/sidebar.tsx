import { Button } from "@/components/ui/button";
import { TbLogout2 } from "react-icons/tb";
import { ChartNoAxesCombined, Edit, HandCoins, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const sideBar = [
  {
    url: "/dashboard",
    title: "Dashboard",
    icon: <ChartNoAxesCombined />,
  },
  {
    url: "/dashboard/earnings",
    title: "Earnings",
    icon: <HandCoins />,
  },
  {
    url: "/dashboard/restaurant",
    title: "Restaurant",
    icon: <Store />,
  },
  {
    url: "/dashboard/addMenu",
    title: "Add Menu",
    icon: <Edit />,
  },
  {
    url: "/dashboard/orderDetails",
    title: "Order Details",
    icon: <Edit />,
  },
];

function Sidebar() {
  return (
    <>
      <div className="bg-[--secondary1] flex flex-wrap flex-col items-center justify-start pt-20 space-y-2 w-fit h-dvh px-6 fixed left-0 top-0 z-50 ">
        <Image width={126} height={126} src={"/circleLogo.png"} alt="" />

        {sideBar.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="flex items-center space-x-4 justify-start pl-4 text-base w-[200px] h-[44px] bg-[--primaryBlack2] hover:bg-[--secondary3] text-[--primaryWhite] rounded-md"
          >
            {item.icon}
            <span>{item.title}</span>
          </Link>
        ))}
        <Button className="text-base bg-[--primaryBlack2] hover:bg-[--secondary3]">
          <TbLogout2 className="w-10 h-10 " />
          Logout
        </Button>
      </div>
    </>
  );
}

export default Sidebar;
