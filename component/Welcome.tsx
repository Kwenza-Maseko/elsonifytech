import React from 'react'
import InnovationHero from './InnovationHero'

const Welcome = () => {
    return (

        <div className="flex md:flex-row flex-col justify-between gap-16 mt-4 mt-[100px] mb-10">
            <div className="p-4 md:p-0">
                <p className="text-xl md:text-2xl  font-bold mb-4 text-gray-200 text-center md:text-start">Welcome to ElsonifyTech 🚀</p>
                <p className="text-gray-400 text-center md:text-start">
                    At ElsonifyTech, we bring ideas to life through cutting-edge technology. Whether it’s software development, web applications, or scalable cloud solutions, we build with precision, deploy with efficiency, and innovate for the future.
                </p>

                <p className="text-gray-400 mt-8 text-center md:text-start"><span className="text-lg font-bold text-gray-300">🌍 Your Vision, Our Innovation </span> – From startups to enterprises, we craft tailored solutions that drive business growth and digital transformation.</p>

                <p className="mt-8 text-lg font-bold text-gray-200 capitalize text-center md:text-start">Let’s build the future together.</p>
                <InnovationHero/>
            </div>

            <div className="w-full lg:w-[1000px] ">
                <video
                    src="/assets/elsonifytech video.mp4"
                    autoPlay
                    loop
                    muted
                    width="100%"
                    poster="/assets/loader.png"
                    className="rounded-lg shadow-box border border-slate-500"
                />
            </div>

        </div>
    )
}

export default Welcome