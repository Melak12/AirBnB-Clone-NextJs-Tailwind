import React from 'react'
import { Room } from '../typings'
import Image from 'next/image';

type Props = {
    room: Room
}

export default function MediumCard({room}: Props) {
  return (
    <div className='cursor-pointer hover:scale-105 transition duration-300 ease-out'>
        <div className='relative h-80 w-80'>
            <Image src={room.img} alt='Room Image' fill className='rounded-xl' />
        </div>
        <h3 className='text-2xl mt-3'>{room.title}</h3>
    </div>
  )
}