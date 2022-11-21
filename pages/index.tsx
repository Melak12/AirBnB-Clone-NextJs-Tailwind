import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import { GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'
import { NearbyRoom } from '../typings'
import SmallCard from '../components/SmallCard'



function Home({ nearbyRooms }: InferGetStaticPropsType<typeof getStaticProps>) {
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
      </main>

      {/* Footer */}

    </div>
  )
}

export default Home;



export const getStaticProps: GetStaticProps<{ nearbyRooms: NearbyRoom[] }> = async (
  context
) => {
  const res = await fetch('https://www.jsonkeeper.com/b/4G1G')
  const nearbyRooms: NearbyRoom[] = await res.json()

  return {
    props: {
      nearbyRooms,
    },
  }
}
