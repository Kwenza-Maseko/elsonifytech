"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";

const InnovationHero = () => {
    return (
        <div className="relative flex flex-col items-center justify-center">

            {/* World Animation */}
            <div className="relative w-full h-[200px] md:h-[200px] flex items-center justify-center">
                <Canvas>
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[2, 2, 2]} />
                    <Sphere args={[1.2, 64, 64]} scale={2}>
                        <MeshDistortMaterial
                            color="#845bb4"
                            attach="material"
                            distort={0.5}
                            speed={2}
                        />
                    </Sphere>
                </Canvas>
            </div>
        </div>
    );
};

export default InnovationHero;
