import React from "react";
import { foodType } from "../page";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MdFavoriteBorder } from "react-icons/md";
import QuantitySelector from "./quantity";

export default async function Page({
  params,
}: {
  params: Promise<{ foodDetails: string }>;
}) {
  const paramId = (await params).foodDetails;

  async function getData() {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${paramId}`,
      );
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      return data.meals || []; // ✅ Handle missing meals
    } catch (error) {
      console.error("Error fetching meal details:", error);
      return [];
    }
  }

  const data = await getData();

  if (!data.length) {
    return <p className="text-center text-3xl text-red-500">Meal not found!</p>;
  }

  return (
    <div className="container m-auto">
      {data.map((item: foodType) => {
        const { idMeal, strMealThumb, strMeal, strInstructions } = item;
        const stars = Array(5).fill(null);

        return (
          <div key={idMeal} className="flex items-center gap-14">
            <div>
              <Image
                width={500}
                height={600}
                src={strMealThumb}
                alt={strMeal}
                className="w-[500px] h-[600px] object-cover rounded shadow-md"
              />
            </div>
            <div className="space-y-8 flex-[50%] m-auto">
              <h1 className="text-[56px] font-bold">{strMeal}</h1>
              <div>
                <span className="flex items-center gap-2 text-3xl">
                  {stars.map((_, index) => (
                    <Star key={index} fill="gray" stroke="gray" size={32} />
                  ))}
                  (150 Reviews)
                </span>
              </div>
              <p className="text-5xl font-medium">$192.00</p>

              <div className="text-3xl leading-normal font-medium space-y-4">
                <p>Description</p>
                <p className="text-[--secondary2]">
                  {strInstructions.slice(0, 250)}
                </p>
              </div>

              <div className="flex items-center space-x-6 text-4xl font-medium p-4">
                <QuantitySelector />
                <Button className="bg-[--secondary2] text-4xl p-9 rounded-lg">
                  Add to cart
                </Button>
                <Button
                  className="bg-transparent border-2 border-[--secondary1] [&_svg]:size-14 text-[--secondary2] px-6 py-9"
                  variant={"default"}
                  size={"lg"}
                >
                  <MdFavoriteBorder />
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
