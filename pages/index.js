import React from 'react'
import links from "@/Data/links"
import Link from '@/Components/Link'
import Logo from '@/Components/Logo'
import Location from '@/Components/Location'
import Head from 'next/head'
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
        <Location name='Omeehsa Salon - Shalimar Market'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1205.7720861431026!2d82.73205391604111!3d26.794391046076587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc9f9c62ad9c34082!2sOmeesha%20Makeovers!5e0!3m2!1sen!2sin!4v1648565357034!5m2!1sen!2sin" width="100%" height="300" style={{ border: 0, borderRadius: '6px' }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Location>
        <Location name='Omeehsa Makeovers - New Location'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1205.7720861431026!2d82.73205391604111!3d26.794391046076587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x88d9680781dce88a!2zMjbCsDQ3JzM4LjUiTiA4MsKwNDMnNTYuNSJF!5e0!3m2!1sen!2sin!4v1648564655101!5m2!1sen!2sin" width="100%" height="300" style={{ border: 0, borderRadius: '6px' }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Location>
      </div>
    </>
  )
}

export default Home