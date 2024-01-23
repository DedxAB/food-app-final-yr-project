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
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/Logo.png";

const LoginPage = () => {
  return (
    <>
      <div className="h-screen flex flex-col mx-auto justify-center items-center">
        <div className="w-[54%]">
          <Image src={Logo} alt="logo" priority/>
        </div>
        <Card className="w-80">
          <CardHeader>
            <CardTitle className="text-xl">Log in</CardTitle>
            <CardDescription>
              Don&apos;t have an account?
              <Link href="/signup" className="ml-1 font-semibold text-black">
                Sign up
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input id="name" placeholder="Email"  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input id="password" placeholder="Password" type="password" autoComplete="on"/>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button>
              <LogIn className="w-[0.88rem] mr-2" />
              Log in
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default LoginPage;
