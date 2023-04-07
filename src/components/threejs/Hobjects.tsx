import React from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Box, OrbitControls, useTexture } from '@react-three/drei'

type Props = {
    img: string 
}

const Hobjects = (props: Props) => {
    const colorMap = useTexture(props.img)
        return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight />
            <mesh scale={1.5}>
            <boxGeometry  />
            <meshStandardMaterial map={colorMap} />
            </mesh>
        </>
    )
}

export default Hobjects