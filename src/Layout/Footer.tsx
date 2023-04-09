import BoxApp from '@/components/threejs/Box'
import React from 'react'
import { SiHashnode, SiGithub, SiLinkedin, SiMicrodotblog } from 'react-icons/si'
type Props = {}

const Footer = (props: Props) => {
    return (
        <div className='py-10 px-5 text-center w-full text-white bg-slate-900'>
            <div id="footer" className='w-full my-3'>
            <p className='font-bold text-[1.8rem]'>Ready To Collaborate?<br></br>Get In Touch!</p>
            </div>
        

        <div id="footer"  className='font-medium'>

            <section className='flex item-center  py-3 my-3 justify-between'>
                <div className='leading-8 font-semibold items-start flex flex-col'>
                    <p className='flex items-center'><span className="text-blue-700"><SiHashnode /></span><a className="ml-3" href='https://hashnode.com/@codingpastor'>Hashnode</a></p>
                    <p className='flex items-center'><span><SiGithub /></span><a className="ml-3" href='https://github/AduwoAyooluwa'>Github</a></p>
                    <p className='flex items-center'><span className='text-blue-500'><SiLinkedin /></span><a className="ml-3" href='https://linkedin.com/in/aduwo-ayooluwa'>LinkedIn</a></p>
                    <p className='flex items-center'><span className='text-yellow-500'><SiMicrodotblog /></span><a className="ml-3" href='https://codingpastor.dev'>My Blog</a></p>
                </div>

                <div className='w-1/2 items-end'>
                    {/* <p className=''>Click to contact me via whatsapp</p> */}
                    <div className='h-[100px] w-full z-10 ' onClick={() => {
                        window.location.replace("https://wa.me/8144341503")
                    }}>
                        <BoxApp />  
                        
                    </div>
                    
                </div>
                
            </section>
            <hr></hr>
            <p className="py-3 font-semibold ">2023. Built with Love By <a href='https://github.com/AduwoAyooluwa'>Coding Pastor</a></p>
        </div>
        </div>
    )
}

export default Footer