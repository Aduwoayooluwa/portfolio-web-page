import Particles from '@/components/others/Particles'
import BoxApp from '@/components/threejs/Box'
import  { TextP } from '@/components/threejs/Button'
import App from '@/components/threejs/Scene'
import SpApp from '@/components/threejs/Sphere'
import Button from '@/components/threejs/Spring'
import React from 'react'
import Test from './Test'
import { useSpring, animated, config } from '@react-spring/web'
import styles from './styles.module.css'

type Props = {}

const Hero = (props: Props) => {
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
        <div className='-z-10'>
            <Particles />
        </div>
            
            <animated.div style={{ background }} className={styles.background} />
            <main className='bg-[#2C3333] h-screen w-full flex flex-col items-center justify-center'>
                <div className='w-1/4 absolute top-20 right-20'>
                    <App />
                </div>
                
                <div className='w-1/3 absolute top-28 left-20'>
                    <BoxApp />
                </div>

                <section>
                    <div className='overflow-hidden rounded-full w-[400px] h-[400px]'>
                        <SpApp />
                    </div>


                </section>

                <section className='text-white'>
                    <p className=''>I am Ayooluwa Aduwo</p>
                    <summary>I am a Full Stack Web Developer</summary>
                </section>
                
                
                <section className='w-full'>
                    <div className='w-full'>
                    <TextP name='Coding Pastor' />
                    </div>

                    <div className='absolute left-20'>
                        <Button name="View My Resume" />
                    </div>

                    <div className='absolute right-20'>
                        <Button name="Contact Me" />
                    </div>
                    
                </section>
            </main>
        </>
    )
}

export default Hero