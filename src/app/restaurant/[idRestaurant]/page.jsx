import { Button } from "@/components/ui/button";
import Image from "next/image";
import DetailsImg from "../../../../public/assets/details.jpeg";
import { Heart, MapPin, MoveLeft } from "lucide-react";
import Link from "next/link";
import MenuDetailsCard from "@/components/mealDetailsCard/MenuDetailsCard";
import NavbarCard from "@/components/navbarCard/NavbarCard";

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
      <div className="w-[100%] max-w-3xl h-[18%] absolute top-0 left-0 -z-10">
        <Image
          src={DetailsImg}
          alt="image-photo"
          className="object-cover h-full w-full"
          priority
        />
      </div>

      {/* resturant details  */}
      <div className="w-[78%] mx-auto min-h-0 bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm shadow-md rounded-lg py-5 mt-14 border-2 border-white">
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

      {/* resturant menu  */}
      <div className="mb-20 p-5 shadow-md border-2 border-white rounded">
        <MenuDetailsCard />
        <MenuDetailsCard />
        <MenuDetailsCard />
        <MenuDetailsCard />
        <MenuDetailsCard />
      </div>

      {/* Navbar bottom */}
      <NavbarCard billAmount={`Total Bill`} buttonMsg="Go to Cart" />
    </main>
  );
};

export default DetailsPage;
