import React, { useState } from 'react'
import {useScroll, animated, useSpring} from '@react-spring/web'
import About from '@/container/About'
type Props = {}

const Intro = (props: Props) => {
  const scrolling  = useScroll()
  console.log('22')
  console.log(scrolling.scrollYProgress)

  // const styles = useSpring({
  //     from: 
    
  // })


  const [loadNum, setLoadNum] = useState(0)

  React.useEffect(() => {
    setLoadNum((prev) => prev + 1)
  },  [])

  return (
    <div>
      <animated.div style={{opacity: scrolling.scrollYProgress}}>
        <p>Coding Pastor Welcomes you</p>


        {/* <animated.section
          style={styles}
        >

        </animated.section> */}

        <div className={`h-[20px] w-[200px ] bg-red-${500} rounded-xl mt-40`}></div>
      </animated.div>
    
    </div>
  )
}

export default Intro