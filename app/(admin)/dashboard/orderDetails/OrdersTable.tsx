"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { CalendarIcon, EyeIcon } from "lucide-react";
import { initialOrders } from "./OrderData";
import Link from "next/link";

export default function OrdersTable() {
  const [orders, setOrders] = useState(initialOrders);

  const updateStatus = (index: number, newStatus: string) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = newStatus;
    setOrders(updatedOrders);
  };
  console.log(orders);
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Orders List</h2>
        <Button variant="outline" className="bg-black text-[--primaryWhite]">
          <CalendarIcon className="w-5 h-5 mr-2" /> Feb 15, 2024
        </Button>
      </div>

      <div className="border rounded-lg overflow-hidden shadow-md">
        <Table>
          <TableHeader>
            <TableRow className="bg-black text-white">
              <TableHead className="text-white">Order ID</TableHead>
              <TableHead className="text-white">Product</TableHead>
              <TableHead className="text-white">Customer Name</TableHead>
              <TableHead className="text-white">Date</TableHead>
              <TableHead className="text-white">Amount</TableHead>
              <TableHead className="text-white">Status</TableHead>
              <TableHead className="text-white">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="px-3 py-1 rounded-lg border cursor-pointer">
                      <span
                        className={`${
                          order.status === "Pending"
                            ? "text-red-500"
                            : order.status === "Processing"
                              ? "text-yellow-500"
                              : "text-green-500"
                        }`}
                      >
                        {order.status}
                      </span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem
                        onClick={() => updateStatus(index, "Pending")}
                      >
                        Pending
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => updateStatus(index, "Processing")}
                      >
                        Processing
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => updateStatus(index, "Delivered")}
                      >
                        Delivered
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
                <TableCell>
                  <Link href={`/dashboard/orderDetails/${order.id}`}>
                    <Button variant="ghost" size="icon">
                      <EyeIcon className="w-5 h-5" />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <Button variant="outline" className="mx-1">
          1
        </Button>
        <Button variant="outline" className="mx-1">
          2
        </Button>
        <Button variant="outline" className="mx-1">
          3
        </Button>
        <Button variant="outline" className="mx-1">
          4
        </Button>
        <Button variant="outline" className="mx-1">
          Next
        </Button>
      </div>
    </div>
  );
}
