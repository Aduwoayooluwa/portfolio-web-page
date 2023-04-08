import React from 'react'
import {useScroll, animated} from '@react-spring/web'
import About from '@/container/About'
type Props = {}

const Intro = (props: Props) => {
  const scrolling  = useScroll()
  console.log('22')
  console.log(scrolling.scrollYProgress)

  return (
    <div>
      
      <About />
      <animated.div style={{opacity: scrolling.scrollYProgress}}>
      <About />
      </animated.div>
    
    <About />
    </div>
  )
}

export default Intro