import Image from 'next/image'
import React from 'react'
import { NearbyRoom } from '../typings'

type Props = {
    room: NearbyRoom
}

export default function SmallCard({room}: Props) {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 cursor-pointer 
    hover:bg-gray-100 rounded-xl hover:scale-105 transition transform 
    duration-200 ease-out'>
        {/* Left Image */}
        <div className='relative h-16 w-16'>
            <Image src={room.img} alt='Room Image' fill className='rounded-lg' />
        </div>
        {/* Right Texts */}
        <div>
            <h2>{room.location}</h2>
            <h3 className='text-gray-500'>{room.distance}</h3>
        </div>
    </div>
  )
}