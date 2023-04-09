import React, { useState } from 'react'
import {useScroll, animated, useSpring} from '@react-spring/web'
import About from '@/container/About'
import Intro from '@/components/threejs/Intro'
type Props = {}

const TheInt = (props: Props) => {

  return (
    <div>
      <Intro />
    </div>
  )
}

export default TheInt