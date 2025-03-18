import DiscordWidget from '@/component/DiscordWidget'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "ElsonifyTech - Community",
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
                            Community Chat
                        </p>
                        <p className="mt-6 text-gray-300 font-italic p-4 rounded-md bg-slate-600">
                            Welcome to ElsonifyTech Community click <span className='font-bold text-white capitalize'>join discord</span> button below to interact with other people if you already not joined the community yet. Use this community platform to provide feedbacks or enquiries about ElsonifyTech. Enjoy!
                        </p>
                    </div>

                </div>

                <div className="mt-6">
                    <DiscordWidget />
                </div>
            </div>
        </div>
    )
}

export default page