import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-[87vh] p-5">
      <div className="flex justify-between items-center">
        <Menu className="cursor-pointer" />
        <Link href="/cart">
          <Button variant="" size="icon" className="w-10">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 mt-4 text-center p-5">
        <h1 className="text-4xl font-bold">Hello World</h1>
      </div>
    </main>
  );
}