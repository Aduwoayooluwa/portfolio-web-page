import React from 'react'
import { useTexture } from '@react-three/drei'
import { AccumulativeShadows, RandomizedLight} from '@react-three/drei'

type Props = {}

const Moon = (props: Props) => {
    const colorMap = useTexture('moon.png')
    return (
    <>
        <ambientLight intensity={0.2} />
        <directionalLight />
        <mesh scale={1.5}>
        <sphereGeometry  />
        <RandomizedLight amount={8} radius={5} ambient={0.5} position={[5, 3, 2]} bias={0.001} />
        <meshStandardMaterial map={colorMap} />
        </mesh>
    </>
)
}

export default Moon