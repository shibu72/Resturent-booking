import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface foodCardType {
  id: string;
  title: string;
  image: string;
  instructions: string;
}

export default function FoodCard({
  id,
  title,
  image,
  instructions,
}: foodCardType) {
  return (
    <>
      <Card className="w-[calc(100%/5)] text-[--secondary1]">
        <CardHeader>
          <Image
            src={image}
            alt={title}
            width={1000}
            height={1000}
            className="rounded-xl"
          />
        </CardHeader>
        <CardContent className="space-y-2">
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>{instructions}...</CardDescription>
          <p>$192</p>
        </CardContent>
        <CardFooter className="grid">
          <Link href={`/food/${id}`}>
            <Button className="rounded-full bg-[--secondary2] text-lg w-fit py-6 px-10">
              Order Now
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
