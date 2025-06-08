import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";

import React from "react";

const data = [
    {
        
    },
    {
        
    },
    {
        
    },
    {
        
    },
    {
        
    },
    {
        
    },
]

export default function RecentMenu() {
  return (
    <>
        {
            data.map((item, index)=><Card key={index} className="w-48 m-auto flex flex-wrap flex-col items-start justify-center p-4 ">
            <Image width={150} height={150} src={"/images/food.png"} alt="food" />
            <CardTitle className="text-sm">Spinach & Mushroom</CardTitle>
            <CardDescription className="text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
              imperdiet lectus.
            </CardDescription>
            <p>$192.00</p>
    
            <Button className="rounded-full px-10 bg-[--secondary2]">Edit</Button>
          </Card>)
        }
      
    </>
  );
}
