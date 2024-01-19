"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Detailimage from '../../../public/assets/details.jpeg'
import { Button } from '@/components/ui/button'
import { Heart,AlertCircle,Minus,Plus} from 'lucide-react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"



const menucards = (props) => {
  
    const [Count ,setCount]=useState(0);

    const handleCountPlus =()=>{
        setCount(Count + 1);
    }
    const handleCountMinus =()=>{
        if(Count <1) return setCount(0);
        setCount(Count - 1);
    }



    return (
        <>

            <div className='flex flex-col my-10 gap-5'>
                <div className='flex justify-between'>
                    <div className='w-[120px] h-[100px]'>
                        {/* image */}
                        <Image src={Detailimage} alt='' className='' priority={true}></Image>
                    </div>

                    <div className='flex flex-col gap-1'>
                        {/* name  */}
                        <div>
                            <h1 className='text-lg font-bold'>{props.foodname}</h1>
                        </div>
                        <div>
                            {/* price */}
                            <p className='text-lg font-bold'>{props.price}</p>
                        </div>
                        <div>
                            {/* descripton  */}
                            <Dialog>
                                <DialogTrigger>
                                    <Button variant='outline' className='mt-1'>Menu</Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Today menu</DialogTitle>
                                        <DialogDescription>
                                            hot Pizza
                                            <br />
                                            sweet Pizza
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                    <div>
                        <Button variant='piyas' size='icon'>
                            <Heart size={24} strokeWidth={1.75} className='text-white' />
                        </Button>
                    </div>
                </div>
                <div className='flex justify-between items-col'>
                    <div className='flex justify-between items-col gap-3'>
                        {/* subcription  */}
                        <Select>
                            <SelectTrigger className="w-[120px]">
                                <SelectValue placeholder="Subscribe" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Monthly</SelectItem>
                                <SelectItem value="dark">Weekly</SelectItem>
                                <SelectItem value="system">Yearly</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className='mr-10 ml-1 pt-2'>
                            <Dialog>
                                <DialogTrigger>
                                    {/* See more */}
                                    <AlertCircle size={28} strokeWidth={1.75} />
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>what is Subscription ?</DialogTitle>
                                        <DialogDescription>
                                        Subscription is a recurring order .
                                          🤣🤣🤣🤣🤣🤣
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                         </div>
                    </div>

                    <div>
                        {/* + add - remove */}
                       <div className='flex items-center justify-center text-base'>
                        <Button variant='outline' size='icon' onClick={handleCountMinus}>
                        <Minus />
                        </Button>
                        <span className='mx-2'>{Count}</span>
                        <Button variant='piyas' size="icon" onClick={handleCountPlus}>
                        <Plus className='text-white'/>
                        </Button>

                       </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default menucards
