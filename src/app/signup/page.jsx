import { Button } from "@/components/ui/button";
import Logo from "../../../public/assets/Logo.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div className="h-screen flex mx-auto justify-center items-center">
      <Card className="w-80 border-2 border-gray-100 shadow relative">
        <div className="w-[13rem] z-10 absolute left-1/2 transform -translate-x-1/2 bottom-[14.5rem]">
          <Image src={Logo} alt="logo" priority />
        </div>
        <CardHeader className="mt-[3.75rem]">
          <CardTitle className="text-xl">Sign up</CardTitle>
          <CardDescription>
            Have an account?
            <Link href="/login" className="ml-1 font-semibold text-black">
              Log in
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input id="name" placeholder="Email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input id="password" placeholder="Password" type="password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>
            <LogIn className="w-[0.88rem] mr-2" />
            Sign up
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
