import React, { ChangeEvent, UIEvent, useEffect, useRef, useState } from 'react'
import { Rotate as Hamburger } from 'hamburger-react'
import { ScrollContext } from '@/context/ScrollContext'

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
    const ref = useRef(null)
    const [isOpen, setIsOpen] = useState(false)

    const { handleScroll, navColor, setNavColor, scrollHeight } = React.useContext(ScrollContext)

    


        return (
        <aside id="navbar" onScroll={handleScroll} className={`${scrollHeight > 10 && 'bg-black'} ${scrollHeight > 1500 && scrollHeight < 2300 && 'bg-red-800'} ${scrollHeight > 3000 && 'bg-indigo-800'} ${scrollHeight > 2300 && scrollHeight < 3000 && 'bg-blue-800'} ${scrollHeight > 600 && scrollHeight < 1500  && 'bg-red-600'} ${isOpen ? 'h-screen bg-black' : 'bg-transparent'} fixed z-50 w-full grid place-items-center py-4 text-white`}>
            <nav  className='md:flex items-center hidden justify-between w-3/5'>
                {
                    navItems.map((item, index) => {
                        return (
                            <li className='list-none font-semibold' key={index}>{item.name}</li>
                        )
                    })
                }
            </nav>

            {isOpen && (<nav className={`flex-col flex md:hidden`}>
            {
                    navItems.map((item, index) => {
                        return (
                            <li className='list-none font-semibold' key={index}>{item.name}</li>
                        )
                    })
                }
            </nav>)}
            
            <section className={`md:hidden  flex ${isOpen ? 'flex-col items-center' : 'flex-row items-center justify-evenly'}`}>
                <p className='font-medium mr-3'>Coding <span className='font-medium text-green-600'>Pastor</span> <span className='font-medium text-yellow-600'>System</span></p>
                <Hamburger toggled={isOpen} toggle={setIsOpen}/>
            </section>
            
        </aside>
    )
    }

export default Navigation