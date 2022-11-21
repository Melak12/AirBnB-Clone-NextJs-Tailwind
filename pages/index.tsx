import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>AirBnB Reimagined</title>
        <meta name="description" content="Next js Typescript based AirBnB Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Head */}
      <Header/>
      <Banner/>

      {/* Footer */}

    </div>
  )
}
