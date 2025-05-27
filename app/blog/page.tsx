import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Elsonify Software - Blog",
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
                            Blog
                        </p>
                        <p className="mt-6 text-gray-400">
                            Welcome to Elsonify Software – Where Innovation Meets Execution.
                        </p>

                        <p className="mt-6 text-gray-400">
                            Get updated about innovation of Elsonify Software 
                        </p>

                        <div className="mt-8">
                            <div className="border-2 rounded-lg shadow-boxb p-4  w-full md:w-[75%] border-gray-800" >
                                <p className='text-md text-gray-300 font-bold'>Official launch of company website</p>

                                <p className='text-end text-gray-400 text-xs'>Date: 2025/03/17</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page