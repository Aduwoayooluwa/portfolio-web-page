"use client"
import React from 'react'
import { useTexture } from '@react-three/drei'
import { AccumulativeShadows, RandomizedLight} from '@react-three/drei'

type Props = {}

const Moon = (props: Props) => {
    const mapping = useTexture({
        colorMap: 'moon_smooth.png',
        roughnessMap: 'moon_rough.jpeg',
        normalMap: 'moon_txt.png'
})
    return (
    <>
        {/* <ambientLight intensity={1.2} /> */}
        <directionalLight />
        <mesh scale={1.2}>
        <sphereGeometry  />
        <RandomizedLight amount={8} radius={5} ambient={0.5} position={[5, 3, 2]} bias={0.001} />
        <meshStandardMaterial {...mapping}/>
        </mesh>
    </>
)
}

export default Moon