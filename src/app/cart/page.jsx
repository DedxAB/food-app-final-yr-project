"use client";
import CartDishCard from "@/components/cartDishCard/CartDishCard";
import NavbarCard from "@/components/navbarCard/NavbarCard";
import { Button } from "@/components/ui/button";
import { Clock4, Heart, Home, ShoppingBag } from "lucide-react";
import Link from "next/link";

const CartPage = () => {
  return (
    <main className="relative">
      {/* header  */}
      <div className="flex items-center justify-between p-5 shadow rounded bg-white">
        <Link href="/">
          <Button variant="outline" className="rounded-full" size="icon">
            <Home className="w-5" />
          </Button>
        </Link>
        <div className="text-center text-xl font-bold flex items-center gap-2">
          <span>Your</span>
          <ShoppingBag className="w-5 inline-block" />
        </div>
        <Button size="icon">
          <Heart className="w-4" />
        </Button>
      </div>

      {/* card container  */}
      <div className={`px-5 pb-1 my-5 shadow-md rounded`}>
        <CartDishCard />
        <CartDishCard />
      </div>

      {/* add more items  */}
      <div
        className={`px-5 pb-1 my-5 shadow-md rounded flex justify-between items-center`}
      >
        <div>
          <p>Want's to add more items?</p>
        </div>
        <div>
          <Link href={`/restaurant/123`}>
            <Button>Add</Button>
          </Link>
        </div>
      </div>

      {/* cart user details  */}
      <div className="flex flex-col gap-1 py-4 px-5 text-base mb-20 rounded shadow">
        <div className="border-b-2 py-1 items-center">
          Delivery Time:{" "}
          <Clock4 color="#e53e3e" className="inline-block w-4 ml-2" />{" "}
          <span className="font-bold">30-45 min</span>
        </div>
        <div className="border-b-2 py-1">
          Location: Ramkrisnapur, near safety life, Barasat, 700124
        </div>
        <div className="pt-1">
          <p>Arnab Bhoumik</p>
          <p>
            <span className="text-red-600">+91 </span>8597605546
          </p>
        </div>
      </div>

      {/* total bill navbar  */}
      <NavbarCard billAmount={`Total Bill`} buttonMsg="Checkout" />
    </main>
  );
};

export default CartPage;
