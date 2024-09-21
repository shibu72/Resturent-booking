import React, { useEffect, useState } from "react";
import img from "/images/food.png";
import { Link } from "react-router-dom";
export default function FoodSection() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("/fake.json")
      .then((res) => res.json())
      .then((data) => setFoods(data.foods));
  }, []);
  return (
    <div>
      <div className="capitalize flex items-center justify-between">
        <h2 className="text-3xl font-semibold">
          Explore <span className="text-primary">Yummy Recipe</span>
        </h2>
        <Link to={"/foods"}>
          <p className="text-primary hover:text-gray">see all &gt;</p>
        </Link>
      </div>

      <div className="mt-10 grid gap-5 grid-cols-4 m-auto items-center justify-center">
        {foods.slice(0, 4).map((item, index) => {
          const { name, description, price, image } = item;
          return (
            <div key={index} className="w-70 grid gap-2 bg-[#f3f3f5] p-1 rounded-xl">
              <img src={image} alt={name} />
              <h2 className="text-xl">{name}</h2>
              <p>{description}</p>
              <h3>${price}</h3>
              <button className="capitalize bg-secondary rounded-full px-8 py-2 text-white text-sm">
                order now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
