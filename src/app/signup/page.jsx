import { Button } from "@/components/ui/button";
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
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
      <div className="h-screen flex mx-auto justify-center items-center">
        {/* <Image src={`https://api.api-ninjas.com/v1/randomimage?category=food`} alt="food-image" width={200} height={200}></Image> */}
      <Card className="w-80">
        <CardHeader>
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
                <Input id="password" placeholder="Password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button >
            <LogIn className="w-[0.88rem] mr-2" />
            Sign up
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
