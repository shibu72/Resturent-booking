"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"; // Import ShadCN button
import { Minus, Plus } from "lucide-react"; // Icons

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(2); // Default value

  return (
    <div className="flex items-center justify-between border-2 rounded-lg overflow-hidden w-1/4 ">
      {/* Decrease Button */}
      <Button
        variant="outline"
        size="icon"
        className="w-16 h-16 text-4xl border-none"
        onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
      >
        <Minus size={40} />
      </Button>

      {/* Quantity Display */}
      <span className="p text-center text-4xl font-semibold">{quantity}</span>

      {/* Increase Button */}
      <Button
        className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white"
        onClick={() => setQuantity((prev) => prev + 1)}
      >
        <Plus size={18} />
      </Button>
    </div>
  );
}
