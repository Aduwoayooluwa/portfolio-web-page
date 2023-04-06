import * as React from 'react'
import { useSpring, animated, config } from '@react-spring/web'
import styles from './styles.module.css'

export default function Test() {
  const [{ background }] = useSpring(
    () => ({
      from: { background: '#181823' },
      to: [
        { background: '#322F3D' },
        { background: '#191A19' },
        { background: '#356d94' },
        { background: '#ff615d' },
        { background: '#454545' },
      ],
      config: config.molasses,
      loop: {
        reverse: true,
      },
    }),
    []
  )

  return (
    <div className="h-[600px] z-10 w-full">
      
    </div>
  )
}
