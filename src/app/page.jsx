
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart,LayoutGrid} from "lucide-react";
import Navbar from "./home/page"
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-[87vh] ">
      <div className="flex justify-between items-center p-5">
      <LayoutGrid className="cursor-pointer" />
        <Link href="/signup">
          <Button variant="" size="icon" className="w-28">
            {/* <ShoppingCart className="h-4 w-4" />  */}
            <span>Sing Up</span>
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 mt-4 text-center p-5">
      </div>
      {/* home name  */}
      <div className=" flex justify-normal gap-2">
        <div>
          <span className="font-bold text-2xl pl-3">Lets eat</span>
        </div>
      </div>
      <div className="flex justify-normal flex-col">
        <span className="pl-4 m-1 font-mono font-3xl">Nutrious food.</span>
      </div>
      <div>
        <Navbar />
      </div>
    </main>
  );
}
