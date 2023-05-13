"use client"
import Particles from '@/components/others/Particles'
import BoxApp from '@/components/threejs/Box'
import  { TextP } from '@/components/threejs/Button'
import App from '@/components/threejs/Scene'
import SpApp from '@/components/threejs/Sphere'
import Button from '@/components/threejs/Spring'
import React, { Suspense, useEffect, useState } from 'react'
import { useSpring, animated, config } from '@react-spring/web'
import styles from './styles.module.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Chair from '@/components/threejs/Chair'
import { Html, useProgress } from '@react-three/drei'
import { DragControls } from 'three-stdlib'
import { useGeolocation, useScrolling , useBattery, useLocation } from 'react-use';
import RainbowLineAnimation from '@/components/others/RainbowLineAnimation'
import BackgroundAnimation from '@/components/others/BackgroundAnimation'
import ScaleLoader from 'react-spinners/ScaleLoader'
import { useAudio } from 'react-use'
import { BsPlayCircleFill, BsPause, BsVolumeMute} from 'react-icons/bs'
import { VscUnmute } from 'react-icons/vsc'
type Props = {}

const Loader = () => {
    const { progress } = useProgress()

    return (
        <Html center>{progress}% Loaded
        </Html>
        )
}

const Hero = (props: Props) => {
    const { charging }: any = useBattery()

    // setting the date
    const date = new Date()
    const [currentDate, setCurrentDate] = useState('')
    
    useEffect(() => {
        setCurrentDate(date.toUTCString())
    }, [])

    const Hobject = React.lazy(() => import('@/components/threejs/Hobjects'))
    const Moon = React.lazy(() => import('@/components/threejs/Moon'))
    const [{ background }] = useSpring(
            () => ({
            from: { background: '#181823' },
            to: [
                { background: '#322F3D' },
                { background: '#191A19' },
                { background: '#356d94' },
                { background: '#ff615d' },
                { background: '#454545' },
            ],
            config: config.molasses,
            loop: {
                reverse: true,
            },
            }),
            []
        )
        
    
    const [audio, state, controls, ref] = useAudio({
        src: '/audio/spectre.mp3',
        autoPlay: true,
        
    });


    const [showControls, setShowControls] = useState(false)
        
    return (
        <>
        {/* <RainbowLineAnimation /> */}
        <div  className='z-10'>
            {/* <Particles /> */}
            
        </div> 
        
        
            <animated.div id='hero' style={{ background }} className={styles.background} />
            {/* { audio } */}
            <main className='bg-[#1B2430] saturate-100 h-screen w-full flex flex-col items-center justify-center'>
                <div className='z-30 absolute right-10 top-20 '>
                    {
                        showControls && (
                            <>
                                <button onClick={controls.mute} className='p-3 bg-white  z-40'>< BsVolumeMute /></button>
                                <button onClick={controls.unmute} className='p-3 bg-white  z-40'><VscUnmute /></button>
                                <button onClick={controls.pause} className='p-3 bg-white  z-40'>< BsPause /></button>
                                <button onClick={controls.play} className='p-3 bg-white  z-40'><BsPlayCircleFill /></button>
                            </>
                        
                        )
                    }
                    <button className='rounded-md bg-black/20 backdrop-blur-md text-white p-3 font-medium' onClick={() => setShowControls((prev) => !prev)}>Show Controls</button>
                </div>
                

                <div className='flex flex-row mt-0 md:mt-0 md:flex-col items-start md:items-center w-full'>
                    <p className=' w-full text-xs font-extrabold text-start md:text-right bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-green-400  to-yellow-500 px-10'>Today&apos;s date is {currentDate}</p>
                    { charging && (<p className=' w-full text-xs font-extrabold text-start md:text-right bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-green-400  to-yellow-500 px-10'></p>)}
                </div>

                <section className='px-0 md:px-4 flex justify-center md:justify-between items-center md:flex-row flex-col mt-14 md:mt-0  text-white z-20 h-fit w-4/5 md:h-[400px]' >
                <div className='z-20 w-full -mt-10 flex md:hidden h-full '>
                        <Suspense fallback={(<div>Loading...</div>)}>
                            <Canvas>
                                <Chair />
                                <OrbitControls enablePan={false} enableZoom={false}/>
                            </Canvas>
                            
                        </Suspense>
                    </div>

                    <div className='w-full h-fit'>
                        
                        <p className="font-medium w-full md:font-semibold text-sm my-4">Hello there, Welcome to Coding Pastor&apos;s Website</p>
                        <p className='font-bold text-2xl md:text-[2.2rem]'>I am Aduwo Ayooluwa</p>
                        <div className='border rounded-md p-2 mr-2 my-3'>
                            <code color='' className='list-none w-full md:w-1/2 my-3 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-green-400  to-yellow-500'>A Human Spider with 2+ years of experience in creating web for businesses and enterprises</code>
                        </div>

                        <div className=' left-0 hidden md:flex md:left-28  my-6 md:my-3'>
                        <Button onClick={() => {

                        }} color='' name="View My Resume" />
                    </div>
                        
                    </div>
                    
                    <div className='z-10 h-ful top-10  absolute  right-0 md:right-20 w-full md:w-1/3 md:ml-20'>
                        <BackgroundAnimation />
                    </div>

                    
                    <div className='hidden w-full md:flex z-20 mt-10 md:-mt-20   h-full '>
                        <Suspense fallback={(<div>Loading..</div>)}>
                            <Canvas>
                                <Chair />
                                <OrbitControls enableZoom={false}/>
                                
                            </Canvas>
                            
                        </Suspense>
                    </div>
                    
                    <div className='w-full  md:hidden  grid place-items-center'>
                    {/* <div className='w-full'>
                    <TextP name='Coding Pastor' />
                    </div> */}
                    

                    <div className='flex md:hidden left-0  md:left-28  my-6 md:my-3'>
                        <Button onClick={() => {

                        }} color='' name="View My Resume" />
                    </div>
                    
                </div>
                </section>         

                

                {/* <section className='text-white'>
                    <p className=''>I am Ayooluwa Aduwo</p>
                    <summary>I am a Full Stack Web Developer</summary>
                </section> */}
                
                
                
            </main>
        </>
    )
}

export default Hero