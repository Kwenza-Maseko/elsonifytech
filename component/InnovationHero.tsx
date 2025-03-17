"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";


const InnovationHero = () => {
    return (
        <div className="relative flex flex-col items-center justify-center">

            {/* World Animation */}
            <div className="relative w-full h-[200px] flex items-center justify-center">
                <Canvas>
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[2, 2, 2]} />

                    <Sphere args={[1.2, 64, 64]} scale={2}>
                        <meshStandardMaterial
                            color="#582d61"
                            transparent
                            opacity={0.5}
                            metalness={0.2}
                            roughness={0.1}
                        />
                    </Sphere>
                </Canvas>
            </div>

        </div>
    );
};

export default InnovationHero;
