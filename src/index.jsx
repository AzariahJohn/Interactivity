import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { VRButton, XR, Controllers } from '@react-three/xr'

const root = ReactDOM.createRoot(document.querySelector('#root'))

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
                position: [ - 4, 3, 6 ]
            }}>
                <XR>
                    <Controllers />
                    <Experience />
                </XR>
            </Canvas>
        </>
    )
}

root.render(<App />)