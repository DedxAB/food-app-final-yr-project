"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import DetailsImg from "../../../../public/assets/details.jpeg";
import {
  Clock,
  Heart,
  Minus,
  MoveLeft,
  Plus,
  ShoppingCart,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
const DetailsPage = () => {
  const [count, setCount] = useState(0);
  const handelCountPlus = () => {
    setCount(count + 1);
  };
  const handelCountMinus = () => {
    if (count < 1) return setCount(0);
    setCount(count - 1);
  };
  return (
    <main className="relative h-[87vh] p-5">
      <div className="w-full h-full">
        <div className="flex items-center justify-between mb-5">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <MoveLeft className="w-4" />
            </Button>
          </Link>
          <Button size="icon">
            <Heart className="w-4" />
          </Button>
        </div>
        <div className="min-w-fit h-[400px]">
          <Image
            src={DetailsImg}
            alt="image-photo"
            className="object-cover rounded-2xl h-full w-full"
          />
        </div>

        <div className="flex gap-3 flex-col my-5">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Name</h1>
            <div className="flex items-center justify-center text-base">
              <Button
                variant="outline"
                size="icon"
                className="h-8"
                onClick={handelCountMinus}
              >
                <Minus className="w-4" />
              </Button>
              <span className="mx-3">{count}</span>
              <Button size="icon" className="h-8" onClick={handelCountPlus}>
                <Plus className="w-4" />
              </Button>
            </div>
          </div>
          <div>
            <span className="text-lg text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              suscipit.
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-lg text-slate-600 mr-7">Delivary Time</span>{" "}
            <Clock className="w-4 mr-1" />
            <span className="font-bold text-lg ml-1">30 min</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-sm text-slate-800">
                Total Price
              </span>
              <span className="font-bold text-base">{count * 178.5}</span>
            </div>
            <div>
              <Button disabled={count < 1}>
                Add to cart <ShoppingCart className="w-4 ml-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
