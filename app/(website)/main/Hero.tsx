"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import banner from "@/assets/banner.png";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import FoodCard from "../food/FoodCard";
import { foodType } from "../food/page";
import Title from "@/components/ui/title";
import SearchFilter from "@/components/ui/search";

export default function Hero() {
  const [search, setSearch] = useState("chicken");
  const [foods, setFoods] = useState<foodType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFoods = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setFoods(data.meals || []);
      } catch (error) {
        setError((error as Error).message);
        setFoods([]);
      } finally {
        setLoading(false);
      }
    };
    fetchFoods();
  }, [search]);

  console.info(foods);

  const searchFilter = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      const result = event.target.value;
      setSearch(result);
    },
    [setSearch],
  );

  return (
    <>
      <div className="flex items-center justify-between m-auto">
        <div className="w-1/2 grid gap-10 ">
          <h1 className="text-6xl font-bold">
            Good <span className="text-[--secondary3]">booking</span>, great
            memories
          </h1>

          <p className="text-[45px] font-normal">
            Enable diners to customize their booking by requesting a specific
            table location or view.
          </p>

          <SearchFilter handleSearch={searchFilter} />
        </div>
        <div className="">
          <Image
            width={699}
            height={699}
            src={banner}
            alt="Restaurant dining banner with delicious food"
          />
        </div>
      </div>

      <div className="flex items-center justify-between mb-10">
        <Title className="" titleText="Explore" colorText="Yummy Recipe">
          {" "}
        </Title>
        <Link href={"/food"} className="text-xl font-normal flex items-center">
          See All <ChevronRight />
        </Link>
      </div>
      <div>
        <div className="flex flex-row flex-wrap items-center justify-between gap-16">
          {loading ? (
            <p className="text-4xl text-center">Loading.....</p>
          ) : foods.length === 0 ? (
            <span className="m-auto">
              <Image
                src={"/images/thinking.gif"}
                alt="thinking"
                width={240}
                height={240}
                className="w-60 h-60"
              />
            </span>
          ) : error ? (
            <p className="text-center text-red-500 text-4xl">{error}</p>
          ) : (
            foods.slice(0, 4).map((food: foodType) => {
              const { idMeal, strMeal, strMealThumb, strInstructions } = food;
              return (
                <FoodCard
                  key={idMeal}
                  id={idMeal}
                  title={strMeal}
                  image={strMealThumb}
                  instructions={strInstructions.slice(0, 100)}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
