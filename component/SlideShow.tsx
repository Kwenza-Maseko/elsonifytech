"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
    "/assets/botaniker.jpg",
    "/assets/empire.jpg",
    "/assets/kwazie.jpg",
    "/assets/post.jpg",
    "/assets/post 2.jpg",
];

export default function SlideShow() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Slides every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[330px] overflow-hidden">
            <motion.div
                className="flex gap-2 rounded-lg"
                animate={{ x: `-${index * 350}px` }} // Move by FULL width of each slide
                transition={{ ease: "easeInOut", duration: 1 }}
                style={{ width: images.length * 350 + "px" }} // Ensure container is wide enough
            >
                {images.map((src, i) => (
                    <div key={i} className="relative w-[350px] h-[310px] rounded">
                        <Image
                            src={src}
                            fill
                            className="object-contain rounded-lg"
                            alt={`Slide ${i + 1}`}
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
