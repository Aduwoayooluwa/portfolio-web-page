import Link from 'next/link'
import React from 'react'
import { SiHashnode, SiGithub, SiLinkedin, SiMicrodotblog } from 'react-icons/si'
type Props = {}

const Bottom = (props: Props) => {
  return (
    <div className='bg-green-800 h-screen pt-48 w-full'>
        <a href="">See me click me</a>
        <Link href="">Click me</Link>
    </div>
  )
}

export default Bottom