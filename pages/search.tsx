import { format } from 'date-fns';
import { useRouter } from 'next/router';
import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';


const Search = () => {

    const router = useRouter();

    const { location, startDate, endDate, numberOfGuests } = router.query;

    const formattedStartDate = format(startDate? new Date(startDate.toString()):new Date(),  "dd MMMM yy");
    const formattedEndDate = format(endDate? new Date(endDate.toString()):new Date(), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${numberOfGuests}`}/>

            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300+ Stays - {range} - for {numberOfGuests} number of guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

                    {/* Filtering  Chips (Note: Custom Tailwind CSS) */}
                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='mChip'>Cancellation Flexibility</p>
                        <p className='mChip'>Type of Place</p>
                        <p className='mChip'>Price</p>
                        <p className='mChip'>Rooms and Beds</p>
                        <p className='mChip'>More filters</p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>

    )
}

export default Search;