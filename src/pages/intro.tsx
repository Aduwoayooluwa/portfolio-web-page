import React, { useState } from 'react'
import {useScroll, animated, useSpring} from '@react-spring/web'
import RainbowLineAnimation from '@/components/others/RainbowLineAnimation'
import CodingPastorSVG from '@/components/others/CodingPastor'
import  CodingPastorBackground  from '@/components/others/CP.svg';
import BackgroundAnimation from '@/components/others/BackgroundAnimation';
type Props = {}

const TheInt = (props: Props) => {

  return (
  
      <>
        <CodingPastorSVG />
        {/* <CodingPastorBackground className="w-full h-full" /> */}
        <BackgroundAnimation />
      </>



  )
}

export default TheInt