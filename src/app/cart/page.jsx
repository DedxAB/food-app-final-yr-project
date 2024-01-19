import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MoveLeft, Store, Heart } from 'lucide-react'
import Menucard from '../../components/menucards/Menu'

const page = () => {
    return (
        <div>
            <main>
                {/* header */}
                <div className='flex justify-between items-center bg-white p-5 border-y-2'>
                    <Link href="/details/13">
                        <Button varient="outline" className="rounded-full" size="icon">
                            <MoveLeft className='w-6' />
                        </Button>
                    </Link>
                    <div className='flex items-center text-center gap-1 font-bold text-xl'>
                        <span>Your</span>
                        <Store />
                    </div>

                    <Button size="icon">
                        <Heart className='w-5' />
                    </Button>
                </div>
                {/* card container  */}
                <div className='px-4 shadow-md pb-1 mb-5'>
                    <Menucard foodname="Pizza 55" price="Rs . 300. 00" />
                    <Menucard foodname="BBQ Pizza" price="Rs . 520. 00" />
                    <Menucard foodname="Veggie Pizza" price="Rs . 250. 00" />
                    {/* <Menucard foodname="Veggie Pizza" price="Rs . 250. 00" />
                    <Menucard foodname="Veggie Pizza" price="Rs . 250. 00" /> */}
                </div>
                {/* user details */}
                   {/* todo */}


                {/* Total Bill */}
                <div className='flex items-center justify-between bg-red-600 py-2 px-5 bg-opacity-15 backdrop-filter  backdrop-blur-sm  max-w-3xl w-full fixed bottom-0  shadow-md rounded-md'>
                    <div className='flex flex-col'>
                        <span className='font-bold text-sm'>Total Bill</span>
                        <span className='font-bold text-base'>Rs. {564.4}</span>
                    </div>
                    <div>
                        <Button className="h-11">Checkout</Button>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default page
