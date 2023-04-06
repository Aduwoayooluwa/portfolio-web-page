import { Box, OrbitControls, RoundedBox, Stats, Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React , { useState } from 'react'
import { useSpring, animated } from '@react-spring/three' 
import { DoubleSide } from 'three'

type Props = {
    name: string
}
export const TextP = (props: Props) => {
    const [active, setActive] = useState(false)
    const springs = useSpring({ scale: active ? 1.5 : 1 })
    
    return (
        <Canvas>
            <animated.mesh scale={springs.scale} 
            onClick={() => setActive(!active)}    
            >

                <Text scale={[5, 5, 5]}
                    color="white"
                    anchorX="center"
                    anchorY="middle">
                        {props.name}
                </Text>
                <meshStandardMaterial color={'green'} side={DoubleSide}/>
                <OrbitControls />
            </animated.mesh>
        </Canvas>
    )
}
