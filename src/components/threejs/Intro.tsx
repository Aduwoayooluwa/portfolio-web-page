import React from 'react'
import {useScroll} from '@react-spring/web'
import About from '@/container/About'
type Props = {}

const Intro = (props: Props) => {
  const scrolling  = useScroll()
  console.log(scrolling)
  return (
    <div><About /></div>
  )
}

export default Intro