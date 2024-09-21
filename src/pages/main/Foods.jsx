import React, { useEffect, useState } from "react";
import InputSearch from "../../components/ui/InputSearch";


export default function Foods() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("/fake.json")
      .then((res) => res.json())
      .then((data) => setFoods(data.foods));
  }, []);

   const category = ['pizza', 'rice', 'kabab', 'salad', 'sushi', 'fry', 'chicken'];
  return (
    <div className="mt-10">

      <div className="bg-primary flex items-center justify-around mb-10 py-2">
        <span className="px-2 bg-green-600 text-center">&lt;</span>
        <div>
          <ul className="list-none flex capitalize">
            {
              category.map((item, index) => <li key={index} className="py-2 px-4 hover:bg-secondary">{item}</li>)
            }
            
          </ul>
        </div>
        <span className="px-2 bg-green-600 text-center">&gt;</span>
      </div>
      
      <div className="flex items-center justify-center">
        <h2 className="text-3xl text-gray font-semibold capitalize w-1/2">
          explore <span className="text-primary">yummy recipe</span>
        </h2>
        <div className="w-1/2">
        <InputSearch />
        </div>
      </div>
      
      <div className='mt-14 flex flex-wrap gap-10 m-auto items-center justify-center'>
          {
            foods.map((item, index)=>{
              const {name, description, price, image} = item
              return (
            <div key={index} className='w-60 grid gap-1 bg-[#f3f3f5] p-1 pb-2 rounded-xl'>
            <img src={image} alt={name} />
            <h2 className='text-xl'>{name}</h2>
            <p>{description}
            </p>
            <h3>${price}</h3>
            <button className='capitalize bg-secondary rounded-full w-fit px-10 py-2 text-white text-sm'>order now</button>
            </div>)}
            )
          }
          
        
        </div>
    </div>
  );
}
