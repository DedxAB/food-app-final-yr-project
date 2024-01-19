
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart } from "lucide-react";
import Navbar from "./home/page"
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-[87vh] ">
      <div className="flex justify-between items-center p-5">
        <Menu className="cursor-pointer"/>
            <Link href="/signup">
        <Button variant="" size="icon" className="w-28">
          {/* <ShoppingCart className="h-4 w-4" />  */}
          <span>Sing Up</span>
        </Button>
            </Link>
        
      </div>
        <div className="absolute bottom-0 left-0 mt-4 text-center p-5">
      </div>
      <div >
        <Navbar/>
      </div>
    </main>
  );
}
