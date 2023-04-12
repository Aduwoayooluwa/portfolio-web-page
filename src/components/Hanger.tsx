import React, { useState } from 'react'
import { Slant as Hamburger } from 'hamburger-react'
import { SiBlogger, SiGithub, SiHashnode, SiLinkedin, SiMicrodotblog } from 'react-icons/si'
import { useSpring, animated } from 'react-spring'
type Props = {}

const Hanger = (props: Props) => {
    const [open, setOpen] = useState<boolean>(false)

    const pageAnimation = useSpring({
        transform: open ? 'translateX(0%)' : 'translateX(100%)',
        opacity: open ? 1 : 0,
        
    });


    return (
        <animated.div className={`${open && 'rounded-full p-3 w-full overflow-x-hidden right-0'} flex items-left flex-col  backdrop-blur-md bg-[black]/20`} >
            <animated.section style={pageAnimation} className='w-full grid place-items-center'>
                { open &&(
                    <div className='flex list-none justify-evenly items-center w-full text-[25px] md:text-3xl md:w-[300px]'>
                        <li className=''><a className="text-blue-700" href='https://hashnode.com/@codingpastor'><SiHashnode /></a></li>
                        <li><a className='' href='https://github.com/AduwoAyooluwa'><SiGithub /></a></li>
                        <li><a className="text-yellow-700" href='https://codingpastor.dev'><SiMicrodotblog /></a></li>
                        <li><a className='text-blue-600' href='https://linkedin.com/in/aduwo-ayooluwa'><SiLinkedin /></a></li>
                    </div>)
                }
                <div className={`${!open && 'hidden'}`}>
                    <Hamburger size={20} color='white' easing='ease-in-out'  toggle={setOpen} toggled={open}/>
                </div>
                
            </animated.section>
            <div className={`${open && 'hidden'}`}>
                    <Hamburger  color='white' easing='ease-in-out'  toggle={setOpen} toggled={open}/>
            </div>

            
        </animated.div>
    )
    }

export default Hanger