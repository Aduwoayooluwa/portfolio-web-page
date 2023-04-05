import BoxApp from '@/components/threejs/Box'
import App from '@/components/threejs/Scene'
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
    return (
        <>
            <main className='bg-[#2C3333] h-screen w-full grid place-items-center'>
                <div className='w-1/3 absolute top-20 right-20'>
                    <App />
                </div>
                
                <div className='w-1/3 absolute top-28 left-20'>
                    <BoxApp />
                </div>

                <section>
                    <div className='rounded-full w-[400px] h-[400px] border-2'>

                    </div>
                </section>
                
            </main>
        </>
    )
}

export default Hero