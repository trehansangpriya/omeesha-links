import React from 'react'
import Head from 'next/head'
import Logo from '@/Components/Logo'
import links from "@/Data/links"
import Link from '@/Components/Link'
import locations from '@/Data/locations'
import Location from '@/Components/Location'
const Home = () => {
  return (
    <>
      <Head>
        <title>Omeesha Makeovers - Links</title>
      </Head>
      <div className='flex flex-col items-center w-full min-w-[340px] min-h-screen p-4 py-[56px] md:w-[400px]'>
        <Logo />
        {
          links.map((link, index) => (
            <Link {...link} key={index} />
          ))
        }
        <br />
        <p className='w-full text-headingm my-1 font-heading'>Addresses</p>
        {
          locations.map((location, index) => (
            <Location {...location} key={index} />
          ))
        }
      </div>
    </>
  )
}

export default Home