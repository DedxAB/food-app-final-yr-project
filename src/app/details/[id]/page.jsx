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
const DetailsPage = () => {
  return (
    <main className="relative h-[87vh] p-5">
      <div className="flex items-center justify-between mb-5">
        <Button variant="outline" size="icon" className="w-12">
          <MoveLeft className="w-4" />
        </Button>
        <Button size="icon">
          <Heart className="w-4" />
        </Button>
      </div>
      <div className="min-w-fit h-[300px]">
        <Image
          src={DetailsImg}
          alt="image-photo"
          className="object-cover rounded-2xl h-full w-full"
        />
      </div>

      <div className="flex gap-3 flex-col my-5">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Name</h1>
          <div className="flex items-center justify-center text-base">
            <Button variant="outline" size="icon" className="h-8">
              <Minus className="w-4" />
            </Button>
            <span className="mx-3">1</span>
            <Button size="icon" className="h-8">
              <Plus className="w-4" />
            </Button>
          </div>
        </div>
        <div>
          <span className="text-xs text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            suscipit.
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-xs text-slate-600 mr-7">
            Delivary Time
          </span> <Clock className="w-4 mr-1" /><span className="font-bold">30 min</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-bold text-sm text-slate-800">Total Price</span>
            <span className="font-bold text-base">Rs. 287.00</span>
          </div>
          <div>
            <Button>
              Add to cart <ShoppingCart className="w-4 ml-3" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
