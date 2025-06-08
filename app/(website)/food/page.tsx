"use client";
import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import SearchFilter from "@/components/ui/search";
import Title from "@/components/ui/title";

export interface foodType {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
}

export default function Page() {
  const [search, setSearch] = useState("");
  const [foods, setFoods] = useState<foodType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFoods = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
        );
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setFoods(data.meals || []); // Default to empty array if no meals
      } catch (err) {
        setError((err as Error).message);
        setFoods([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, [search]);
  return (
    <div className="container m-auto">
      <div className="flex items-center justify-between my-10">
        <Title
          titleText="Explore"
          colorText="Yummy Recipe"
          className="flex-[50%]"
        >
          {" "}
        </Title>

        <div className="flex-[50%]">
          <SearchFilter
            handleSearch={(e: React.FocusEvent<HTMLInputElement>) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-12">
        {loading ? (
          <p className="text-center text-4xl">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          foods.map((food) => {
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
  );
}
