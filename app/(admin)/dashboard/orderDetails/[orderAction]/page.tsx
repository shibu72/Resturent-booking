import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { FaRegUser } from "react-icons/fa6";
import { SiMastercard } from "react-icons/si";
import React from "react";
import OrderActionTable from "./orderActionTable";
import { initialOrders } from "../OrderData";

interface DataType {
  id: string;
  product: string;
  customer: string;
  date: string;
  amount: string;
  status: string;
}

export default async function Page({
  params,
}: {
  params: Promise<{ orderAction: string }>;
}) {
  const iD = (await params).orderAction;
  const data: DataType | undefined = initialOrders.find((s) => s.id === iD);

  // Handle the case when data is not found
  if (!data) {
    return <div className="text-center text-red-500">Order not found.</div>;
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row sm:space-y-6 items-start lg:items-center justify-start lg:justify-between">
        <div className="space-y-4">
          <div className="flex gap-4 items-center">
            <h2 className="text-xl font-semibold">Orders ID: {data.id}</h2>
            <Button
              className={`${
                data.status === "Pending"
                  ? "bg-red-500"
                  : data.status === "Processing"
                    ? "bg-yellow-500"
                    : "bg-green-500"
              }`}
            >
              {data.status}
            </Button>
          </div>
          <div>
            <span className="flex gap-2 items-center text-base font-semibold">
              <Calendar />
              {data.date}
            </span>
          </div>
        </div>

        <div className="flex sm:flex-none flex-[100%] items-start justify-center gap-6 ">
          <div className="bg-black rounded-lg">
            <FaRegUser className="text-white bg-black text-6xl p-5 rounded-lg" />
          </div>
          <div className="font-semibold">
            <h2 className="text-xl">{data.customer}</h2>
            <p className="text-base">Full Name: Shristi Singh</p>
            <p className="text-base">Email: shristi@gmail.com</p>
            <p className="text-base">Phone: +91 904 231 1212</p>
            <p className="text-base">Address: New York, USA</p>
          </div>
        </div>
      </div>

      <div className="bg-zinc-200 p-4 space-y-2 rounded-lg mt-6">
        <h2 className="text-xl font-bold">Payment Info</h2>
        <span className="text-base font-normal flex items-center gap-2">
          <SiMastercard className="text-lg" />
          Master Card **** **** 6557
        </span>
      </div>

      <div className="mt-6">
        <OrderActionTable Data={data} />
      </div>
    </>
  );
}
