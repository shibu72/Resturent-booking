"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function RestaurantForm() {
  const { register, handleSubmit } = useForm();
  const [images, setImages] = useState<(string | null)[]>(Array(5).fill(null));

  const handleImageUpload = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newImages = [...images];
        newImages[index] = reader.result as string;
        setImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: unknown) => {
    console.log("Form Data:", data);
  };

  return (
    <Card className="max-w-3xl mx-auto p-6">
      <CardContent>
        <h2 className="text-lg font-semibold mb-4">Add Restaurant Image</h2>
        <div className="grid grid-cols-5 gap-4 mb-6">
          {images.map((img, index) => (
            <label
              key={index}
              className="border-2 border-dashed border-green-500 p-4 flex flex-col items-center justify-center cursor-pointer rounded-md"
            >
              {img ? (
                <Image
                  src={img}
                  alt="Uploaded"
                  width={100}
                  height={100}
                  className="w-full h-20 object-cover rounded-md"
                />
              ) : (
                <FaPlus className="text-green-500 text-2xl" />
              )}
              <span className="text-green-500 text-sm mt-1">Upload</span>
              <Input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageUpload(index, e)}
              />
            </label>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Input {...register("name")} placeholder="Restaurant Name" />
            <Input
              {...register("location")}
              placeholder="Restaurant Location"
            />
          </div>
          <Textarea
            {...register("description")}
            placeholder="Description"
            className="h-24 mb-4"
          />

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <Input type="datetime-local" {...register("openingTime")} />
              <IoCalendarOutline className="absolute right-3 top-3 text-gray-500" />
            </div>
            <div className="relative">
              <Input type="datetime-local" {...register("closingTime")} />
              <IoCalendarOutline className="absolute right-3 top-3 text-gray-500" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Weekend:</label>
            <Select {...register("weekend")}>
              <SelectTrigger>
                <SelectValue placeholder="Select Weekend" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Saturday">Saturday</SelectItem>
                <SelectItem value="Sunday">Sunday</SelectItem>
                <SelectItem value="Friday">Friday</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700"
          >
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
