"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import DetailsImg from "../../../../public/assets/details.jpeg";
import { MapPinned } from "lucide-react"
import Menupage from "../../../components/menucards/Menu"
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

  return (
    <main className="relative  p-5">

      <div className="flex justify-between items-center">
        <Link rel="stylesheet" href="/">
          <Button variant="outline" className="rounded-full" size="icon">
            <MoveLeft className="w-5" />
          </Button>
        </Link>
        <Button size="icon">
          <Heart className="w-4" />
        </Button>
      </div>
      {/* resturant image  */}
      <div className="w-[100vw] max-w-3xl h-[32vh] absolute top-0 left-0 -z-10">
        <Image src={DetailsImg} alt="image-photo"
          className="object-cover h-full w-full "
          priority
        />
      </div>
      {/* resturant address  */}
      <div className="w-full h-[31vh] relative">
        <div className="absolute bottom-0 w-full h-[23vh] bg-white bg-opacity-70 backdrop-filter backdrop-blur-md shadow-md rounded-md py-8">
          <div className="flex justify-center items-center gap-1 flex-col">
            <h1 className="text-xl font-bold">Aii Khaya Ja</h1>
            <p className="text-lg text-gray-500">Duckbanglo more ,City mall</p>
          </div>
          <div className="flex justify-center items-center">
            <span className="font-bold"> Open </span>
            <p className="ml-1"> 8am - 8pm</p>
          </div>
          <div className="flex justify-center items-center">
            <MapPinned color="#ff0000" strokeWidth={1.25} />
            <span className="font-bold ml-2">1.5 km</span>
          </div>
        </div>

      </div>

      <Menupage />


    </main>
  );
};

export default DetailsPage;
