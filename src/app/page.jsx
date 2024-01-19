import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart } from "lucide-react";

export default function Home() {
  return (
    
    <div className="hero min-h-screen relative flex items-center justify-center">

      <div className="absolute inset-0 bg-cover bg-blur" style={{ backgroundImage: 'url(/assets/details.jpeg)' }}></div>

      <div className="absolute  w-[65vh] h-[40vh] bg-white bg-opacity-50 backdrop-filter backdrop-blur-md shadow-md rounded-xl py-8">

      <div className="hero-overlay bg-opacity-60">

      <div className="hero-content text-center text-neutral-content relative z-10">
        <div className="max-w-md mx-auto">
          <h1 className="mb-5 text-5xl font-bold text-black">Hello there</h1>
          <p className="mb-5 text-black">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
    </div>
      </div>
  );
}
