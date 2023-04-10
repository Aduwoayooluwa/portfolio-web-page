import React, { ChangeEvent, UIEvent, useEffect, useRef, useState } from 'react'
import { Rotate as Hamburger } from 'hamburger-react'
import { ScrollContext } from '@/context/ScrollContext'
import { useScroll, useSpring, animated } from '@react-spring/web'
import { SiHashnode, SiGithub, SiLinkedin, SiMicrodotblog } from 'react-icons/si'

type Props = {}

const navItems = [
    {
        name: 'Home',
        
    },
    {
        name: 'Projects'
    },
    {
        name: 'About'
    },
    {
        name: 'Contact'
    },
    {
        name: 'Experience'
    }
]

const Navigation = (props: Props) => {
    const [showPage, setShowPage] = useState(false);

    const pageAnimation = useSpring({
        transform: showPage ? 'translateY(0%)' : 'translateY(100%)',
        opacity: showPage ? 1 : 0,
    });
    
    const ref = useRef(null)
    const [isOpen, setIsOpen] = useState(false)

    const { handleScroll, navColor, setNavColor, scrollHeight } = React.useContext(ScrollContext)


    const handleHamb = () => {
        setIsOpen(!isOpen);
        setShowPage(true)
    }
    


        return (
        <aside id="navbar" onScroll={handleScroll} className={`${isOpen && 'h-screen bg-[#1B2430]'} ${scrollHeight > 10 &&  scrollHeight < 300 && !isOpen &&  'bg-white/10 backdrop-blur-md'} ${scrollHeight > 300 && scrollHeight < 1000 && !isOpen && 'bg-[#1B2430]/20 backdrop-blur-md'} ${scrollHeight > 1000 && scrollHeight < 2000 && !isOpen && 'bg-black/20 backdrop-blur-md'} ${scrollHeight > 2000 && scrollHeight < 3000 && !isOpen && 'bg-[#1B2430]/20 backdrop-blur-md'} ${scrollHeight > 3000 && !isOpen && 'bg-black/50 backdrop-blur-md'}  fixed z-50 w-full grid place-items-center py-4 text-white`}>
            <nav  className='md:flex  items-center hidden justify-between w-full'>
                {
                    navItems.map((item, index) => {
                        return (
                            <li className='list-none font-semibold' key={index}>{item.name}</li>
                        )
                    })
                }
            </nav>

            {isOpen && (<animated.nav style={pageAnimation} className={`page  w-full grid place-items-center md:hidden`}>
                <>
                <div className='leading-8 my-5'>
                    {
                        navItems.map((item, index) => {
                            return (
                                <li className='list-none font-semibold' key={index}>{item.name}</li>
                            
                            )
                        })
                }
                </div>
                
                <div className={`rounded-full p-3 w-full right-0 flex items-left flex-col`} >
                                    <section className='w-full grid place-items-center'>
                                        <div className='flex list-none justify-evenly items-center w-full md:w-[300px]'>
                                            <li className=''><a className="text-blue-700" href='https://hashnode.com/@codingpastor'><SiHashnode fontSize={30}/></a></li>
                                            <li><a className='' href='https://github.com/AduwoAyooluwa'><SiGithub fontSize={30}/></a></li>
                                            <li><a className="text-yellow-700" href='https://codingpastor.dev'><SiMicrodotblog fontSize={30}/></a></li>
                                            <li><a className='text-blue-600' href='https://linkedin.com/in/aduwo-ayooluwa'><SiLinkedin fontSize={30}/></a></li>
                                        </div>
                                    </section>
                </div>
                </>
                
            </animated.nav>)}
            
            <section className={`md:hidden  flex ${isOpen ? 'flex-col items-center' : 'flex-row items-center justify-evenly'}`}>
                <p className='font-medium mr-3'>Coding <span className='font-medium text-green-600'>Pastor</span> <span className='font-medium text-yellow-600'>System</span></p>
                <Hamburger toggled={isOpen} toggle={handleHamb}/>
            </section>
            
        </aside>
    )
    }

export default Navigation