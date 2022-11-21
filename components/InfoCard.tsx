import Image from 'next/image'
import React from 'react'
import { Room } from '../typings'

import {  StarIcon } from '@heroicons/react/24/solid'
import {HeartIcon} from '@heroicons/react/24/outline'

type Props = {
    room: Room
}

export default function InfoCard({ room }: Props) {
    return (
        <div className='flex py-7 px-2 border-b cursor-pointer hover:opacity-80 
        hover:shadow-lg pr-4 transition duration-200 ease-out'>
            {/* Left */}
            <div className='relative h-40 w-40 m:h-52 m:w-90 flex-shrink-0'>
                <Image className='rounded-2xl' src={room.img} alt="Room Image" fill style={{ objectFit: 'cover' }} />
            </div>

            {/* Right */}
            <div className='flex flex-col flex-grow pl-5'>
                <div className='flex justify-between'>
                    <p>{room.location}</p>
                    <HeartIcon className='h-7 cursor-pointer' />
                </div>

                <h4 className='text-xl'>{room.title}</h4>

                <div className='border-b w-10 pt-2' />

                <p className='pt-2 text-sm text-gray-500 flex-grow'>{room.description}</p>

                <div className='flex justify-between item-end pt-5'>
                    {/* Star */}
                    <p className='flex items-center'>
                        <StarIcon className='h-5 text-red-400' />
                        {room.star}
                    </p>


                    {/* Pricing */}
                    <div>
                        <p className='text-lg lg:text-2xl pb-2 font-semibold'>{room.price}</p>
                        <p className='text-right font-extralight'>{room.total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}