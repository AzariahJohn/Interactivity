import { OrbitControls } from '@react-three/drei'
import { Interactive } from '@react-three/xr'
import { Perf } from 'r3f-perf'
import React, { useState } from 'react'

export default function Experience()
{

    const [cube, setCub] = useState()

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <Interactive onSelect={() => {
            setCub(!cube)
            console.log("clicked")
        }}>
            <mesh castShadow position-x={ - 2 } onClick={() => {
                setCub(!cube)
                console.log("clicked")
            }}>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>
        </Interactive>

        {cube && <mesh castShadow position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>}

        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}