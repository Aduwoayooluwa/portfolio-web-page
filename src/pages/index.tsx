"use client"

import Head from 'next/head'
import Image from 'next/image'
import { Inter, Dancing_Script } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/container/Hero'
import Projects from '@/container/Projects'
import Stacks from '@/container/Stacks'
import ScrollContainer from '@/components/others/ScrollContainer'
import About from '@/container/About'
import Footer from '@/Layout/Footer'
import Test from '@/container/Test'
import Container from '@/container/Container'
import React, { Suspense, UIEvent, useEffect, useState } from 'react'
import Work from '@/container/Work'
import { useScroll, useSpring, animated } from '@react-spring/web'
import { useAudio } from 'react-use'
import Bottom from '@/Layout/Bottom'


const inter = Inter({ subsets: ['latin'] })
const dancingScript = Dancing_Script({ subsets: ['latin'] });

const AllComponents = () => {
  return (
    <React.Fragment>
    <main>
        <>
          <Suspense fallback={(<div>Error Bringing Up Page</div>)}>
            <Hero />
          </Suspense>
          
          {/* <animated.div>
            <Projects />
          </animated.div> */}
      
          <Stacks />
          <Work />
          <About />        
        <Container />
      </>
    </main>
    <footer>
    <Footer />
  </footer>
  </React.Fragment>
  )
}

export default function Home() {
  const { scrollYProgress } = useScroll()
  const [showPage, setShowPage] = useState(false);
  const [pageShown, setPageShown] = useState<string | null>('')
  const [playBuzz, setplayBuzz] = useState(false)
  const [audio, state, controls, ref] = useAudio({
    src: '/audio/spectre.mp3',
    autoPlay: playBuzz,
  });

  const [mute, setmute] = useState(false)

  // const handleMute = () => {
  //   setmute((prev: boolean) => !prev)
  //   if (mute) {
  //     return controls.mute
  //   }
  //   else {
  //     return controls.unmute
  //   }
  // }
  useEffect(() => {
    setPageShown(sessionStorage.getItem('showPage'))

    if (pageShown === 'true') {
      setShowPage(true)
    }
  },[pageShown])


  const pageAnimation = useSpring({
    transform: showPage ? 'translateY(0%)' : 'translateY(100%)',
    opacity: showPage ? 1 : 0,
  });

  const handleClick = () => {
      setShowPage(true)
      sessionStorage.setItem('showPage', 'true')
      setplayBuzz(true)
    };
  
  return (
    <>
      <Head>
        <title>Coding Pastor</title>
        <meta name="description" content="I am a Professional website Developer with years of experience building websites for businesses and enterprises." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/ayo.jpg" />
        <link rel="icon" href="/ayo.jpg" />
      </Head>
      <div id="hero" className={`h-screen bg-[#1B2430] flex flex-col items-center justify-center p-4 ${showPage && 'hidden'}`}>
          
          <p id="intro_p" className={`text-[3rem] ${dancingScript.className} text-center font-extrabold`}>Coding Pastor Welcomes you</p>
          <button className={`bg-green-700 text-white font-semibold p-4 mt-20`} onClick={handleClick}>Hello world</button>
          
        </div>

      <main className={`${!showPage && 'hidden'} bg-[#1B2430]`}>
        {/* {audio}
        <button onClick={controls.mute}>Mute</button>
        <button className='p-2 text-white bg-red-100 mt-40 ml-10' onClick={controls.unmute}>UnMute</button> */}
        {/* <button onClick={handleMute}>Do both</button> */}
        <animated.div className="page" style={pageAnimation}>
            
            <AllComponents />
        </animated.div>
        
      </main>
      
    </>
  )
}
