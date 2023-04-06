import React from 'react'

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
    return (
        <aside className='bg-black fixed z-20 w-full grid place-items-center py-4 text-white'>
            <nav className='flex items-center justify-between w-4/5'>
                {
                    navItems.map((item, index) => {
                        return (
                            <li key={index}>{item.name}</li>
                        )
                    })
                }
            </nav>
                
        </aside>
    )
    }

export default Navigation