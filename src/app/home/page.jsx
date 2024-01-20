import { Home, BaggageClaim, MessageCircle, User, MapPinned, ShoppingBag, Contact, Power, CreditCard, Settings } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const page = () => {
    return (
        <div>
            <footer className="bg-slate-900 p-4 m-1  rounded-lg  fixed bottom-0 w-full max-w-3xl  max-width: 45vh ">
                <div className="container mx-auto">

                    <div className="flex  justify-between items-center space-x-4">
                        <Link href="/">
                            <Home color="#ffffff" strokeWidth={1.75} />
                        </Link>
                        <Link href="/cart">
                            <BaggageClaim color="#ffffff" strokeWidth={1.75} />
                        </Link>
                        <Link href="">
                            <MessageCircle color="#ffffff" strokeWidth={1.75} />
                        </Link>
                        <div >
                            <Sheet>
                                <SheetTrigger><User color="#ffffff" strokeWidth={1.75} /></SheetTrigger>
                                <SheetContent className="bg-white">
                                    <SheetHeader className=''>
                                        <SheetTitle>
                                            <Avatar className="size-16">
                                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />

                                            </Avatar>
                                        </SheetTitle>
                                        <div className='flex justify-start p-1'>
                                            <span className='font-bold ml-1 items-start font-serif text-base  text-3xl'>Arnab</span>
                                        </div>
                                        <SheetDescription>
                                            <div className='flex items-start flex-col justify-normal mt-5 gap-9 ml-0'>
                                                <Link href="/profile" className='flex '>
                                                    <User color="#ff0000" strokeWidth={1.25} />
                                                    <span className="font-bold ml-2">My Profile</span>
                                                </Link>
                                                <Link href="#" className='flex '>
                                                    <ShoppingBag color="#ff0000" strokeWidth={1.25} />
                                                    <span className="font-bold ml-2">My Order</span>
                                                </Link>
                                                <Link href="#" className='flex '>
                                                    <MapPinned color="#ff0000" strokeWidth={1.25} />
                                                    <span className="font-bold ml-2">Delivery Adress</span>
                                                </Link>
                                                <Link href="#" className='flex '>
                                                    <Contact color="#ff0000" strokeWidth={1.25} />
                                                    <span className="font-bold ml-2">Contact Us</span>
                                                </Link>
                                                <Link href="#" className='flex '>
                                                    <CreditCard color="#ff0000" strokeWidth={1.25} />
                                                    <span className="font-bold ml-2">Payment Methods</span>
                                                </Link>
                                                <Link href="#" className='flex '>
                                                    <Settings color="#ff0000" strokeWidth={1.25} />
                                                    <span className="font-bold ml-2">Settings</span>
                                                </Link>
                                            </div>

                                        </SheetDescription>
                                    </SheetHeader>
                                    <div className='flex justify-start items-center pt-28 m-1'>
                                        <Button className='px-6 py-6'>
                                            <Settings size={19} /><span className='pl-2'>Log Out</span>
                                        </Button>
                                    </div>
                                </SheetContent>
                            </Sheet>

                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default page
