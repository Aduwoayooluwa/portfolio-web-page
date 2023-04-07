import React, { useEffect, useRef } from 'react'

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

    // useEffect(() => {
    //     const onScroll = (e: Event) => {

    //     }
    // }, [])

        return (
        <aside className='bg-transparent fixed z-50 w-full grid place-items-center py-4 text-white'>
            <nav className='md:flex items-center hidden justify-between w-3/5'>
                {
                    navItems.map((item, index) => {
                        return (
                            <li className='list-none font-semibold' key={index}>{item.name}</li>
                        )
                    })
                }
            </nav>

            <nav className='flex md:hidden'>
                    <p>Hello</p>
            </nav>
                
        </aside>
    )
    }

export default Navigation