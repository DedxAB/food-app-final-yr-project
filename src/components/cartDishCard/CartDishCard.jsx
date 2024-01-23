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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CartDishCard = () => {
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
      <div className="flex flex-col my-5 gap-2">
        <div className="flex items-center">
          <div className="w-[147px] md:w-[144px] h-[100px]">
            {/* image  */}
            <Image
              src={DetailsImg}
              alt="food image"
              className="object-cover h-full w-full rounded-md"
              priority={true}
            />
          </div>
          <div className="flex justify-between w-full pl-[20px] md:pl-[43px]">
            <div className="flex flex-col ">
              <div>
                {/* name  */}
                <h1 className="text-base font-bold">Fruit salad mix</h1>
              </div>
              <div>
                {/* Price  */}
                <p className="text-base font-bold">Rs.78.00</p>
              </div>
              <div>
                {/* descripton  */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="mt-1">
                      Menu
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Todays menu</DialogTitle>
                      <DialogDescription>
                        Chicken
                        <br />
                        Fish
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div>
              <Button variant="outline" size="icon">
                <Heart className="w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            {/* subcription  */}
            <Select className="pr-2">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Subscribe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nothing">Nothing</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
              </SelectContent>
            </Select>
            <div className="mr-10 ml-1 pt-2">
              <Dialog>
                <DialogTrigger>
                  <AlertCircle />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>What is subscription?</DialogTitle>
                    <DialogDescription>
                      Subscription is a recurring order. You can choose to
                      receive your order weekly or monthly.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
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

export default CartDishCard;
