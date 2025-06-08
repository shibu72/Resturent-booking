"use client";

// import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import Image from "next/image";

export default function RestaurantForm() {
  // const [images, setImages] = useState<(string | null)[]>(Array(5).fill(null));
  const categories = ["All", "Pant", "Cloth", "Watch", "Cosmetics", "Jewelry"];
  const products = new Array(20).fill({
    name: "Spinach & Mushroom",
    price: "$192.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus.",
  });

  // const handleImageUpload = (index: number, event: any) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       const newImages = [...images];
  //       newImages[index] = reader.result as string;
  //       setImages(newImages);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <Card className="max-w-6xl mx-auto p-6">
      <CardContent>
        <Button variant="outline" className="w-full mb-4">
          ➕ ADD NEW CATEGORY
        </Button>
        <h2 className="text-xl font-bold mb-4">All Products</h2>
        <div className="flex gap-2 mb-4 overflow-auto">
          {categories.map((cat, index) => (
            <Button key={index} variant={cat === "All" ? "default" : "outline"}>
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <Card key={index} className="p-4">
              <Image
                width={100}
                height={100}
                src="/images/food.png"
                alt={product.name}
                className="w-full h-32 object-cover rounded-md mb-2"
              />
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <p className="font-bold">{product.price}</p>
              <Button variant="outline" className="mt-2 w-full sm:w-auto">
                Edit
              </Button>
            </Card>
          ))}
        </div>

        <Pagination className="mt-6 justify-center">
          {[1, 2, 3, 4, "...", 10].map((item, i) => (
            <PaginationItem key={i}>
              <PaginationLink isActive={item === 1}> {item} </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>Next</PaginationItem>
        </Pagination>
      </CardContent>
    </Card>
  );
}
