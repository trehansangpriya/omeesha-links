/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Logo from '@/Components/Logo'
import Link from '@/Components/Link'
import Location from '@/Components/Location'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from 'src/firebase'
const Home = () => {
  const [loading, setLoading] = useState(false)
  const [links, setLinks] = useState([])
  const [locations, setLocations] = useState([])
  useEffect(() => {
    setLoading(true)
    onSnapshot(collection(db, 'links'), (snapshot) => {
      // set links when linkType === Link
      setLinks(snapshot.docs.filter(doc => doc.data().linkType === 'Link').sort(
        (a, b) => a.data().order - b.data().order
      ).map(doc => doc.data()))
      // set locations when linkType === Location
      setLocations(snapshot.docs.filter(doc => doc.data().linkType === 'Location').sort(
        (a, b) => a.data().order - b.data().order
      ).map(doc => doc.data()))
      setLoading(false)
    })
  }, [])
  return (
    <>
      <Head>
        <title>Omeesha Makeovers - Links</title>
      </Head>
      <div className='flex flex-col items-center w-full min-w-[340px] min-h-screen p-4 py-[56px] md:w-[400px]'>
        <Logo />
        {
          !loading ? (
            <>
              {
                links.map((link, index) => (
                  <Link {...link} key={index} />
                ))
              }
              <br />
              <p className='w-full text-headingm my-2 text-center font-heading'>Location</p>
              {
                locations.map((location, index) => (
                  <Location {...location} key={index} />
                ))
              }
            </>
          ) : <div className="flex h-[200px] justify-center items-center">
            <img src="/assets/gifs/loading.gif" alt="Loading" width='72px' />
          </div>
        }

      </div>
    </>
  )
}

export default Home