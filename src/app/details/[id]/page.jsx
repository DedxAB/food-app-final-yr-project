import { Button } from "@/components/ui/button";
import Image from "next/image";
import DetailsImg from "../../../../public/assets/details.jpeg";
import { Heart, MapPin, MoveLeft, ShoppingCart } from "lucide-react";
import Link from "next/link";
import MenuDetailsCard from "@/components/detailsCard/MenuDetailsCard";

const DetailsPage = () => {
  return (
    <main className="p-5 relative">
      <div className="flex items-center justify-between mb-5">
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
        <div className="absolute bottom-0 w-full h-[23vh] bg-white bg-opacity-70 backdrop-filter backdrop-blur-md shadow-md rounded-md py-8">
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
      <div className="mb-16">
        <MenuDetailsCard />
        <MenuDetailsCard />
        <MenuDetailsCard />
        <MenuDetailsCard />
        <MenuDetailsCard />
      </div>

      {/* Navbar bottom */}
      <div className="flex items-center justify-between bg-red-600 text-white shadow-md py-2 px-5 fixed bottom-0 right-0 w-full max-w-3x mx-auto">
        <div className="flex flex-col">
          <span className="font-bold text-sm">Total Price</span>
          <span className="font-bold text-base">Rs. {178.5}</span>
        </div>
        <div>
          {/* <Button variant="ghost" disabled={count < 1} className="h-11">
            Add to cart <ShoppingCart className="w-4 ml-3" />
          </Button> */}
          <Button variant="secondary" className="h-11">
            Go to cart <ShoppingCart className="w-4 ml-3" />
          </Button>
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
