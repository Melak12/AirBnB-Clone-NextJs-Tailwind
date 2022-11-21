import Image from 'next/image'
import React, { useState } from 'react'
import { UsersIcon, MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserCircleIcon } from '@heroicons/react/24/solid'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

type Props = {
    placeholder?: string
}

export default function Header({ placeholder}: Props) {
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    
    const router = useRouter();
    
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };



    function handleSelect(ranges: any) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const handleSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numberOfGuests
            }
        });
    }

    const resetSearch = () => {
        setSearchInput("");
        setStartDate(new Date());
        setEndDate(new Date());
        setNumberOfGuests(1);
    }

    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5'>
            {/* Left */}
            <div onClick={() => router.push('/')} className='relative flex h-10 items-center cursor-pointer my-auto'>
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
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className='flex-grow pl-5 bg-transparent outline-none first-letter 
                    text-xs text-gray-600 placeholder-gray-400'
                    type='text'
                    placeholder= {placeholder || 'Start your search'}
                />
                <MagnifyingGlassIcon className=' hidden lg:inline-flex lg:mx-2 h-8 bg-red-400
             text-white p-2 rounded-full cursor-pointer'/>
            </div>

            {/* Right */}
            <div className='flex space-x-4 items-center justify-end text-gray-500'>
                <p className='hidden md:inline'>Become Host </p>
                <GlobeAltIcon className='h-6 cursor-pointer' />
                <div className='flex space-x-2 items-center border-2 p-2 rounded-full'>
                    <Bars3Icon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>

            {/* Search Popup */}
            {
                searchInput &&
                <div className='flex flex-col col-span-3 mx-auto'>

                    <DateRangePicker
                        ranges={[selectionRange]}
                        onChange={handleSelect}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                    />

                    <div className='flex items-center border-b mb-4'>
                        <h2 className='text-2xl font-semibold flex-grow'>Number of Guests</h2>
                        <UsersIcon className='h-5' />
                        <input value={numberOfGuests} min={1} type="number" className='w-12 pl-2 text-lg outline-none text-red-400' onChange={(e) => setNumberOfGuests(Number(e.target.value))} />
                    </div>
                    
                    {/* Buttons */}
                    <div className='flex justify-around'>
                        <button onClick={resetSearch} className='text-gray-500'>
                            Cancel
                        </button>

                        <button onClick={handleSearch} className='text-red-400'>
                            Search
                        </button>
                    </div>

                </div>
            }
        </header>
    )
}