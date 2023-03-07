import { OrbitControls } from '@react-three/drei'
import { Interactive } from '@react-three/xr'
import { Perf } from 'r3f-perf'
import React, { useState } from 'react'
import {useGLTF} from '@react-three/drei'

export default function Experience()
{
    const room = useGLTF("./lab.gltf")
    const [cube, setCub] = useState()

    return <>

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <primitive position={[2, -1, 0.5]} object={room.scene} />
    </>
}