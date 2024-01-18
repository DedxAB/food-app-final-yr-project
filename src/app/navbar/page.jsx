import { Home, BaggageClaim, MessageCircle, User, Database } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
            <footer className="bg-gray-800 p-4 m-1  rounded-lg  fixed bottom-0 w-full mx-auto ">
                <div className="container mx-auto">

                    <div className="flex  justify-between items-center space-x-4">
                        <a href="/">
                            <Home color="#ffffff" strokeWidth={1.75} />
                        </a>
                        <a href="">
                            <BaggageClaim color="#ffffff" strokeWidth={1.75} />
                        </a>
                        <a href="">
                            <MessageCircle color="#ffffff" strokeWidth={1.75} />
                        </a>
                        <div>
                            <Sheet>
                                <SheetTrigger><User color="#ffffff" strokeWidth={1.75} /></SheetTrigger>
                                <SheetContent className="bg-orange-200 ">
                                    <SheetHeader className="">
                                        <SheetTitle>Hi Foodi</SheetTitle>
                                        <SheetDescription>
                                            <div>
                                                <ul className='list-outside  ju'>
                                                    <li><a href="/"><Database color="#000000" strokeWidth={1.75} />My Order</a></li>
                                                    <li>My Profile</li>
                                                    <li>Delivery Address</li>
                                                    <li>Payment Methods</li>
                                                    <li>Contact Us</li>
                                                    <li>Setting</li>
                                                </ul>

                                            </div>
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>

                        </div>


                        {/* <div>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png"/>
                
                                <AvatarFallback><a href="/"></a></AvatarFallback>
                            </Avatar>
                        </div> */}

                    </div>
                </div>
            </footer>   
        </div>

    )
}

export default page
