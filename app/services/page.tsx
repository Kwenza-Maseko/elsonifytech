import Services from '@/component/Services'
import Testimonials from '@/component/Testimonials'
import { Metadata } from 'next';
import Image from 'next/image'
import React from 'react'


export const metadata: Metadata = {
    title: "Elsonify Software - Services",
    description: "Innovative Limitless. A leading tech company",
  };

const page = () => {
    return (
        <div className="w-full relative">
            {/* Background Shape (Lower z-index) */}
            <div className="absolute right-0 top-0 bg-slate-800 w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-bl-[300px] z-[1]" />

            <div className="container mt-[130px] px-4 lg:px-0 m-auto items-center relative z-[10]">

                {/* Hero Section */}
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <div className="w-full">
                        <p className="text-2xl md:text-4xl font-black">
                            Services We Provide
                        </p>
                        <p className="mt-6 text-gray-400">
                            Welcome to Elsonify Software – Where Innovation Meets Execution.
                        </p>
                    </div>
                </div>

                <Services />

                <div className='flex flex-col items-center'>
                    <p className="text-gray-300 text-xl md:text-2xl  font-bold">
                        Latest Projects
                    </p>
                    <div className="flex md:flex-row flex-col justify-center items-center gap-8 p-6">
                        {["/assets/2.png", "/assets/3.png", "/assets/web development.png"].map((src, index) => (
                            <div key={index} className="relative w-full md:max-w-[385px] h-[358px] mt-6">
                                <Image
                                    src={src}
                                    width={400}
                                    height={358}
                                    alt="image"
                                    className="border-2 rounded-lg shadow-lg object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <Testimonials />
            </div>
        </div>
    )
}

export default page