import { useGLTF } from '@react-three/drei'

import React from 'react'

type Props = {}

const Chair = (props: Props) => {
    const gltf: any = useGLTF('/anim/desktop_pc/scene.gltf')
    const group: any = React.useRef(null)
    return (
        <React.Fragment>
            <mesh scale={5}>    
                <ambientLight />
                <primitive object={gltf.scene} />
            </mesh>
        </React.Fragment>
    )
}

useGLTF.preload('/chair/scene.gltf')

export default Chair