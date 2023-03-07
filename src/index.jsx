import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { VRButton, XR, Controllers } from '@react-three/xr'

const root = ReactDOM.createRoot(document.querySelector('#root'))

function DotController({hand}) {
    return(
        <Controllers
            hand={hand}
        >

        <mesh visible={false}/>
        <mesh>
            <sphereGeometry args={[0.01, 8, 8]} />
            <meshBasicMaterial color="white" />
        </mesh>

        </Controllers>
    )
}

function App(){
    return(
        <>
            <VRButton />
            <Canvas
            shadows
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ 0, 0, 0 ],
            }}>
                <XR>
                    <DotController hand="left" />
                    <DotController hand="right" />
                    <Experience />
                </XR>
            </Canvas>
        </>
    )
}

root.render(<App />)