import react from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';

const ThreeD = ({object}) => {
    return(
        <div>
            <div className="w-full xl:w-1/2 h-[500px] relative z-[10]">
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={5} />
                <directionalLight position={[2, 2, 2]} />

                <Float speed={10} rotationIntensity={1.5} floatIntensity={2}>
                    <mesh>
                    <meshStandardMaterial color="#e8f5e9" />
                    <Html
                        position={[0, 0, 0.2]}
                        transform
                        occlude
                        zIndexRange={[100, 0]}
                        distanceFactor={3.5}
                        className="w-full flex justify-center"
                    >
                        <>{object}</>
                    </Html>
                    </mesh>
                </Float>
                </Canvas>
            </div>
        </div>
    )
}

export default ThreeD;