import { Button } from "@/components/ui/button";
import Image from "next/image";
import DetailsImg from "../../../../public/assets/details.jpeg";
import { Heart, MapPin, MoveLeft } from "lucide-react";
import Link from "next/link";
import MenuDetailsCard from "@/components/MealDetailsCard/MenuDetailsCard";

const DetailsPage = () => {
  return (
    <main className="relative">
      <div className="flex items-center p-5 justify-between mb-5">
        <Link href="/">
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
        <Image
          src={DetailsImg}
          alt="image-photo"
          className="object-cover h-full w-full"
          priority
        />
      </div>

      <div className="w-full h-[31vh] relative">
        {/* resturant details  */}
        <div className="absolute bottom-0 h-[27vh] bg-white bg-opacity-70 backdrop-filter backdrop-blur-md shadow-md rounded-md py-8 max-w-3xl w-full">
          <div className="flex gap-1 justify-center items-center flex-col">
            <h1 className="text-xl font-bold">Delics Fruit Salad</h1>
            <p className="text-gray-500 text-lg">Jaya katwang no 4, Nagasem</p>
            <div className="flex items-center justify-center text-center">
              <span className="font-bold">Open </span>
              <p className="ml-2">8 am - 8 pm</p>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 text-red-600 mr-2" />{" "}
              <span className="text-lg font-bold">1.2 km</span>
            </div>
          </div>
        </div>
      </div>

      {/* resturant menu  */}
      <div className="mb-16 p-5 shadow-md mt-5">
        <MenuDetailsCard />
        <MenuDetailsCard />
        <MenuDetailsCard />
        <MenuDetailsCard />
        <MenuDetailsCard />
      </div>

      {/* Navbar bottom */}
      <div className="flex items-center justify-between py-2 px-5 rounded bg-white bg-opacity-20 backdrop-filter backdrop-blur-md fixed max-w-3xl w-full bottom-0 shadow-md">
        <div className="flex flex-col">
          <span className="font-bold text-sm">Total Bill</span>
          <span className="font-bold text-base">Rs. {178.5}</span>
        </div>
        <div>
          <Link href="/cart">
            <Button className="h-11">Go to Cart</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
