import React, { useState } from 'react'
import { Slant as Hamburger } from 'hamburger-react'
import { SiBlogger, SiGithub, SiHashnode, SiLinkedin, SiMicrodotblog } from 'react-icons/si'

type Props = {}

const Hanger = (props: Props) => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <div className={`${open && 'rounded-full p-3 w-full right-0'} flex items-left flex-col  backdrop-blur-md bg-[black]/20`} >
            <section className='w-full grid place-items-center'>
                { open &&(
                    <div className='flex list-none justify-evenly items-center w-full md:w-[300px]'>
                        <li className=''><a className="text-blue-700" href='https://hashnode.com/@codingpastor'><SiHashnode fontSize={30}/></a></li>
                        <li><a className='' href='https://github.com/AduwoAyooluwa'><SiGithub fontSize={30}/></a></li>
                        <li><a className="text-yellow-700" href='https://codingpastor.dev'><SiMicrodotblog fontSize={30}/></a></li>
                        <li><a className='text-blue-600' href='https://linkedin.com/in/aduwo-ayooluwa'><SiLinkedin fontSize={30}/></a></li>
                    </div>)
                }
                <Hamburger color='white'  toggle={setOpen} toggled={open}/>
            </section>
            {/* {
                !open && (<Hamburger color='white'  toggle={setOpen} toggled={open}/>)
            } */}
            
        </div>
    )
    }

export default Hanger