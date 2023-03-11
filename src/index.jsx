import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { VRButton, XR, Controllers } from '@react-three/xr'

const root = ReactDOM.createRoot(document.querySelector('#root'))

function App(){

    const radius = 0.002;

    return(
        <>
            <VRButton />
            <Canvas shadows>
                <XR>
                    <Controllers />
                    <Experience />
                </XR>
            </Canvas>
        </>
    )
}

root.render(<App />)