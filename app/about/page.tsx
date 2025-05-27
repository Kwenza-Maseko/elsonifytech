import AboutUs from '@/component/AboutUs'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "ElsonifyTech - About",
    description: "Innovative Limitless. A leading tech company",
  };

const page = () => {
   
    return (
        <div className="w-full relative">
            {/* Background Shape (Lower z-index) */}
            <div className="absolute right-0 top-0 bg-slate-800 w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-bl-[300px] z-[1]" />

            <div className="container mt-[130px] px-4 lg:px-0 m-auto items-center relative z-[10]">

                {/* Hero Section */}
                <div className="flex flex-col md:flex-row justify-center  gap-6">
                    <div className="w-full text-center">
                        <p className="text-2xl md:text-4xl font-black">
                            About Us
                        </p>
                        <p className="mt-6 text-gray-400">
                            Welcome to ElsonifyTech – Where Innovation Meets Execution.
                        </p>
                    </div>
                </div>

                <AboutUs/>
            </div>
        </div>
    )
}

export default page