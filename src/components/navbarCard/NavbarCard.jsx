import Link from "next/link";
import { Button } from "../ui/button";

const NavbarCard = ({ billAmount, buttonMsg }) => {
  return (
    <>
      <div className="flex items-center justify-between py-2 px-5 rounded bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm fixed max-w-3xl w-full bottom-0 shadow-md">
        <div className="flex flex-col">
          <span className="font-bold text-sm">{billAmount}</span>
          <span className="font-bold text-base">Rs. {178.5}</span>
        </div>
        <div>
          <Link href="/cart">
            <Button className="h-11">{buttonMsg}</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarCard;
