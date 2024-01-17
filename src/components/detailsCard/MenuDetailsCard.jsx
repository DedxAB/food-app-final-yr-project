"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { AlertCircle, Heart, Minus, Plus } from "lucide-react";
import Image from "next/image";
import DetailsImg from "../../../public/assets/details.jpeg";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MenuDetailsCard = () => {
  const [count, setCount] = useState(0);

  const handleCountPlus = () => {
    setCount(count + 1);
  };

  const handleCountMinus = () => {
    if (count < 1) return setCount(0);
    setCount(count - 1);
  };
  return (
    <>
      <div className="flex flex-col my-10 gap-5">
        <div className="flex justify-between">
          <div className="w-[120px] h-[100px]">
            {/* image  */}
            <Image
              src={DetailsImg}
              alt="food image"
              className="object-cover h-full w-full rounded-md"
              priority={true}
            />
          </div>
          <div className="flex flex-col gap-1">
            <div>
              {/* name  */}
              <h1 className="text-lg font-bold">Fruit salad mix</h1>
            </div>
            <div>
              {/* Price  */}
              <p className="text-lg font-bold">Rs.78.00</p>
            </div>
          </div>
          <div>
            <Button variant="outline" size="icon">
              <Heart className="w-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-3">
            {/* subcription  */}
            <Select>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Subcription" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nothing">Nothing</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
              </SelectContent>
            </Select>
            <div className="mr-10"></div>
          </div>
          <div>
            {/* + Add - Remove */}
            <div className="flex items-center justify-center text-base">
              <Button variant="outline" size="icon" onClick={handleCountMinus}>
                <Minus className="w-4" />
              </Button>
              <span className="mx-3">{count}</span>
              <Button size="icon" onClick={handleCountPlus}>
                <Plus className="w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuDetailsCard;
