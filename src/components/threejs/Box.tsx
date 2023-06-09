import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Circle, OrbitControls, useTexture } from '@react-three/drei'

function Box(props: any) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref: any = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    const texture = useTexture('/whatsapp.png')
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.x += delta))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
        {...props}
        ref={ref}
        scale={clicked ? 2 : 1.5}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial map={texture} />
        </mesh>
    )
}

export default function BoxApp() {
    return (
        <Canvas>
        <ambientLight intensity={0.5} />
        {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
        {/* <pointLight position={[-10, -10, -10]} /> */}
        <Box position={[-1.2, 0, 0]} />        
        <OrbitControls />
        </Canvas>
    )
}
