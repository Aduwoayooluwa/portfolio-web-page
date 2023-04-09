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
        

    return (
        <>
        <div  className='-z-10'>
            {/* <Particles /> */}
        </div>            
            <animated.div id='hero' style={{ background }} className={styles.background} />
            <main className='bg-[#1B2430] saturate-100 h-screen w-full flex flex-col items-center justify-center'>
                {/* <section className='absolute z-30 top-[10rem] md:top-[40rem] left-[10px] md:left-[40rem]'>
                    <Suspense fallback={(<p>Error Loading</p>)}>
                    <Canvas>
                        <Hobject img={'github.png'}/>
                        <OrbitControls />
                    </Canvas>

                </Suspense>
                </section> */}

                {/* <section className='absolute right-[10px] top-[45rem] md:top-[40rem]'>
                    <Suspense fallback={(<p>Error Loading</p>)}>
                    <Canvas>
                        <Hobject img={'hashnode.png'}/>
                        <OrbitControls />
                    </Canvas>

                </Suspense>
                </section> */}
                {/* <section className='absolute z-30 left-10 top-[40rem]'>
                    <Suspense fallback={(<p>Error Loading</p>)}>
                    <Canvas>
                        <Hobject img={'linkedin.png'}/>
                        <OrbitControls />
                    </Canvas>

                </Suspense>
                </section> */}

                {/* <div className='w-1/4 absolute top-[3rem] md:top-[2rem] right-20'>
                    <Suspense fallback={(<p>Error Loading</p>)}>
                        <Canvas>
                            <Moon />
                            <OrbitControls autoRotate autoRotateSpeed={8} />
                        </Canvas>

                    </Suspense>
                </div> */}

                
                
                {/* <div className='w-1/3 absolute md:top-10 top-[2rem] left-20'>
                    <BoxApp />
                </div> */}

                <div className='flex flex-row mt-20 md:flex-col items-start md:items-center w-full'>
                    <p className=' w-full text-xs font-extrabold text-start md:text-right bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-green-400  to-yellow-500 px-10'>Today&apos;s date is {currentDate}</p>
                    { charging && (<p className=' w-full text-xs font-extrabold text-start md:text-right bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-green-400  to-yellow-500 px-10'>Your phone is Charging Currently</p>)}
                </div>

                <section className=' flex justify-between md:flex-row flex-col mt-14 md:mt-20 text-white z-20 h-fit w-4/5 md:h-[400px]' >
                    <div className='w-full h-fit'>
                        
                        <p className="font-medium w-full md:font-semibold text-sm my-4">Hello there, Welcome to Coding Pastor&apos;s Website</p>
                        <p className='font-bold text-2xl md:text-[2.2rem]'>I am Aduwo Ayooluwa</p>
                        <div className='border rounded-md p-2 mr-2 my-3'>
                            <code color='' className='list-none w-full md:w-1/2 my-3 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-green-400  to-yellow-500'>A Human Spider with 3+ years of experience in creating web for businesses and enterprises</code>
                        </div>
                        
                    </div>
                    <div className='z-20 w-full flex md:hidden mt-14 h-full '>
                        <Suspense fallback={(<div>Error</div>)}>
                            <Canvas>
                                <Chair />
                                <OrbitControls enableZoom={false}/>
                            </Canvas>
                            
                        </Suspense>
                    </div>
                
                    <div className='w-full  '>
                    {/* <div className='w-full'>
                    <TextP name='Coding Pastor' />
                    </div> */}
                    <div className='hidden md:flex z-20 mt-10  h-full '>
                        <Suspense fallback={(<div>Error</div>)}>
                            <Canvas>
                                <Chair />
                                <OrbitControls enableZoom={true}/>
                                
                            </Canvas>
                            
                        </Suspense>
                    </div>

                    <div className='md:absolute left-10  my-6 md:my-3'>
                        <Button color='' name="View My Resume" />
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