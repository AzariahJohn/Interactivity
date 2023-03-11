import { FirstPersonControls, OrbitControls, PerspectiveCamera, PointerLockControls, useGLTF } from '@react-three/drei'
import { Interactive } from '@react-three/xr'
import React, { useState } from 'react'

export default function Experience()
{
    const room = useGLTF("./lab``.gltf")
    const [cube, setCub] = useState()

    return <>

        {/* <FirstPersonControls
            movementSpeed={0.1}
            lookSpeed={0.1}
        ></FirstPersonControls> */}

        <OrbitControls
            target={[-1, 2, 0]}
            minDistance={0.2}
            maxDistance={1.2}
            enableRotate
            rotateSpeed={0.5}
        />

        <PerspectiveCamera makeDefault position={[3.7, 4.3, -1.5]}/>
        {/* <mesh position={[-1, 2, 0]}>
            <boxGeometry args={[0.1, 0.1, 0.1]}/>
            <meshBasicMaterial color="grey"/>
        </mesh> */}
        
        

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <primitive position={[2, -1, 0.5]} object={room.scene} />
    </>
}