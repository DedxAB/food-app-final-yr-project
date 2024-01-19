"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import DetailsImg from "../../../../public/assets/details.jpeg";
import { MapPinned } from "lucide-react"
import Menupage from "../../../components/menucards/Menu";
import Navbar from "../../home/page"
import Link from "next/link";
import {
  Clock,
  Heart,
  Minus,
  MoveLeft,
  Plus,
  ShoppingCart,
} from "lucide-react";
import { useState } from "react";

const DetailsPage = () => {

  return (
    <main className="relative  ">

      <div className="flex justify-between items-center p-5 ">
        <Link rel="stylesheet" href="/">
          <Button variant="outline" className="rounded-full" size="icon">
            <MoveLeft className="w-5" />
          </Button>
        </Link>
        <Button variant='piyas' size="icon">
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
      <div className="w-full   h-[31vh] relative ">
        <div className="absolute bottom-0 w-full h-[23vh] bg-white bg-opacity-70 backdrop-filter backdrop-blur-md shadow-md rounded-md py-8">
          <div className="flex justify-center items-center gap-1 flex-col">
            <h1 className="text-xl font-bold">DAK BUNGALOW BIRYANI </h1>
            <p className="text-lg text-gray-500">Indraprastha,Hridaypur,Dakbanglow</p>
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
      {/* menu  */}
      <div className=" shadow-md py-2 px-4 mb-4 ">
        <Menupage foodname="Pizza 55" price="Rs . 300. 00" />
        <Menupage foodname="BBQ Pizza" price="Rs . 520. 00" />
        <Menupage foodname="Veggie Pizza" price="Rs . 250. 00" />
      </div>
      {/* Navbar bottom  */}
      <div className="flex items-center justify-between bg-red-600 py-2 px-5 bg-opacity-40 backdrop-filter  backdrop-blur-sm   w-full  max-w-3xl fixed bottom-0  shadow-md rounded-md">
        <div className="flex flex-col">
          <span className=" font-bold text-sm">Total Price</span>
          <span className="font-bold text-base">Rs.{154.5}</span>
        </div>
        {/* Add to cart */}
        <div>
          <Link rel="stylesheet" href="/cart">
            <Button variant="piyas" className="h-11 text-white">
              Go to cart <ShoppingCart className="w-5 ml-2" />
            </Button>
          </Link>

        </div>
      </div>

    </main>
  );
};

export default DetailsPage;
