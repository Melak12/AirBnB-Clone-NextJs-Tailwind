import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserCircleIcon} from '@heroicons/react/24/solid'


type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5'>
            {/* Left */}
            <div className='relative flex h-10 items-center cursor-pointer my-auto'>
                <Image
                    src='https://links.papareact.com/qd3'
                    alt='AirBnB Logo'
                    fill
                    style={{
                        objectFit: 'contain',
                        objectPosition: 'left'
                    }}
                />
            </div>

            {/* Middle */}
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                <input
                    className='flex-grow pl-5 bg-transparent outline-none'
                    type='text'
                    placeholder='Start your search'
                />
                <MagnifyingGlassIcon className=' hidden lg:inline-flex lg:mx-2 h-8 bg-red-400
             text-white p-2 rounded-full cursor-pointer'/>
            </div>

            {/* Right */}
            <div className='flex space-x-4 items-center justify-end text-gray-500'>
                <p className='hidden md:inline'>Become Host</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />
                <div className='flex space-x-2 items-center border-2 p-2 rounded-full'>
                    <Bars3Icon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>
        </header>
    )
}