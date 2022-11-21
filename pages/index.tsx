import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import { GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'
import SmallCard from '../components/SmallCard'
import { Room } from '../typings'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'



function Home({ nearbyRooms, anywhereRooms }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>AirBnB Reimagined</title>
        <meta name="description" content="Next js Typescript based AirBnB Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Head */}
      <Header />
      <Banner />

      {/* Body */}
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        {/* Nearby Section */}
        <section className='pt-6'>
          <>
            <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

              {

                nearbyRooms?.map((item) => (
                  <SmallCard key={item.img} room={item} />
                ))
              }
            </div>
          </>

        </section>

        {/* Live Anywhere Section */}
        <section>
          <>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide py-3 -ml-3'>
            {
              anywhereRooms?.map((item) => (
                <MediumCard key={item.img} room={item}/>
              ))
            }
          </div>
          </>
        </section>

        {/* Large Card */}
        <LargeCard 
        img={'https://links.papareact.com/4cj'} 
        title='The Greatest Ouutdoors'
        description="Wishlists curated by Airbnb."
        buttonText="Get Inspired"
        
        />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default Home;



export const getStaticProps: GetStaticProps<{ nearbyRooms: Room[], anywhereRooms: Room[] }> = async (
  context
) => {
  const nearbyData = await fetch('https://www.jsonkeeper.com/b/4G1G');
  const nearbyRooms: Room[] = await nearbyData.json();

  const liveAnywhereData = await fetch('https://www.jsonkeeper.com/b/VHHT');
  const anywhereRooms = await liveAnywhereData.json();

  return {
    props: {
      nearbyRooms,
      anywhereRooms
    },
  }
}
