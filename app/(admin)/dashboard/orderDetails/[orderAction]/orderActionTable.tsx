"use client";
import Image from "next/image";
import React from "react";
interface dataType {
  id: string;
  product: string;
  customer: string;
  date: string;
  amount: string;
  status: string;
}
export default function OrderActionTable({ Data }: { Data: dataType }) {
  return (
    <>
      <div className="mx-auto bg-zinc-200 rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-[--secondary1]">
          Products
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-zinc-200">
            <thead>
              <tr className="w-full bg-gray-200 text-left">
                <th className="py-2 px-4 font-bold">Product Name</th>
                <th className="py-2 px-4 font-bold">Order ID</th>
                <th className="py-2 px-4 font-bold">Quantity</th>
                <th className="py-2 px-4 font-bold">Total</th>
              </tr>
            </thead>
            <tbody>
              {/* {data.map((table, i) => ( */}
              <tr key={Data.id} className="border-b">
                <td className="py-2 px-4 flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <Image
                    src="/images/food.png"
                    alt="Image of pasta"
                    className="w-12 h-12 mr-2"
                    width={50}
                    height={50}
                  />
                  <span>{Data.product}</span>
                </td>
                <td className="py-2 px-4">#25421</td>
                <td className="py-2 px-4">2</td>
                <td className="py-2 px-4">${Data.amount}</td>
              </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end items-center mt-4">
          <span className="text-xl font-bold mr-4">Total</span>
          <span className="text-xl font-bold">
            ${parseInt(Data.amount) * 2}
          </span>
        </div>
      </div>
    </>
  );
}
