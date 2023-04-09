import React from 'react'
import { SiHashnode, SiGithub, SiLinkedin, SiMicrodotblog } from 'react-icons/si'
type Props = {}

const Footer = (props: Props) => {
    return (
        <div className='py-10 px-5 text-center w-full text-white bg-[#1B2430]'>
        <p className='font-medium mr-3'>Coding <span className='font-medium text-green-600'>Pastor</span> <span className='font-medium text-yellow-600'>System</span></p>

        <div id="footer"  className='font-medium'>

            <section className='flex items-center py-3 justify-around'>
                <div className='leading-8 font-semibold items-start flex flex-col'>
                    <p className='flex items-center'><span className="text-blue-700"><SiHashnode /></span><a className="ml-3" href='https://hashnode.com/@codingpastor'>Hashnode</a></p>
                    <p className='flex items-center'><span><SiGithub /></span><a className="ml-3" href='https://github/AduwoAyooluwa'>Github</a></p>
                    <p className='flex items-center'><span className='text-blue-500'><SiLinkedin /></span><a className="ml-3" href='https://linkedin.com/in/aduwo-ayooluwa'>LinkedIn</a></p>
                    <p className='flex items-center'><span className='text-yellow-500'><SiMicrodotblog /></span><a className="ml-3" href='https://codingpastor.dev'>My Blog</a></p>
                </div>

                <div>
                    <p>Thank you</p>
                </div>
                
            </section>
            <hr></hr>
            <p className="py-3 font-semibold ">2023. Built with Love By <a href='https://github.com/AduwoAyooluwa'>Coding Pastor</a></p>
        </div>
        </div>
    )
}

export default Footer