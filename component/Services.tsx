import React from 'react'
import { Code, Briefcase, Server } from "lucide-react";

const Services = () => {
    return (
        <div className='text-gray-400 my-10 flex flex-col items-center'>
            <p className='text-gray-300 text-2xl font-bold mb-4'>Our Services</p>
            <p className="max-w-xl text-center px-4">
                At <span className="text-gray-300 font-semibold">ElsonifyTech</span>, we believe in <span className="text-gray-300 font-semibold">Innovate Limitless</span>—pushing boundaries, redefining possibilities, and building solutions that transform businesses. Our cutting-edge services ensure that you stay ahead in a digital-first world.
            </p>

            <div className="flex flex-col items-center justify-center text-white py-10">
                {/* Powered By Chip */}
                <div className="relative flex items-center justify-center px-6 py-3 bg-gray-800 border border-gray-300 text-lg font-semibold rounded-lg shadow-lg shadow-gray-300/20">
                    ElsonifyTech
                    {/* Connector Lines */}
                    <div className="absolute top-full md:h-[92px] lg:h-[41px] hidden md:block w-[1px] bg-purple-500 md:bg-yellow-500 lg:bg-purple-500 right-4"></div>
                    <div className="absolute top-full h-[80px] md:h-[400px] lg:h-[42px] w-[1px] bg-blue-500 md:bg-purple-500 lg:bg-yellow-500"></div>
                    <div className="absolute top-full md:h-[92px] lg:h-[41px] hidden md:block w-[1px] bg-blue-500 left-4"></div>
                </div>

                {/* Connector Branch */}
                <div className='my-10 lg:hidden' />
                <div className="relative w-full max-w-[0px]  justify-between lg:my-10 md:my-[10px] hidden md:flex">
                    <div className="absolute top-0 lg:left-[57px] md:left-[59px] lg:w-[288px] md:w-[115px] h-[1px] bg-purple-500 md:bg-yellow-500 lg:bg-purple-500"></div>
                    <div className="absolute top-0 lg:right-[57px] md:right-[59px] lg:w-[288px] md:w-[115px] h-[1px] bg-blue-500"></div>
                </div>

                {/* Feature Cards */}
                <div className="flex flex-wrap justify-center gap-6 mt-4">
                    {[{
                        title: "Web Development",
                        list: [
                            "Custom website design and development",
                            "Mobile-responsive layouts",
                            "SEO optimization and performance"
                        ],
                        icon: <Code className="text-blue-400 text-4xl" />,
                        color: "blue-500",
                        shadow: "shadow-blue-500/20",
                    },
                    {
                        title: "Business Marketing",
                        list: [
                            "Social media marketing strategies",
                            "Content creation and SEO",
                            "Email marketing campaigns"
                        ],
                        icon: <Briefcase className="text-yellow-400 text-4xl" />,
                        color: "yellow-500",
                        shadow: "shadow-yellow-500/20",
                    },
                    {
                        title: "Web Hosting",
                        list: [
                            "Reliable and fast web hosting solutions",
                            "24/7 customer support",
                            "Secure and scalable infrastructure"
                        ],
                        icon: <Server className="text-purple-400 text-4xl" />,
                        color: "purple-500",
                        shadow: "shadow-purple-500/20",
                    }].map((item, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col items-center w-[320px] bg-gray-900 p-6 rounded-lg border-2 border-${item.color} shadow-lg ${item.shadow} hover:shadow-xl transition-shadow duration-300`}
                        >
                            {/* Connector Line */}
                            <div className={`absolute top-[-28px] lg:top-[-58px] w-[1px] h-[28px] lg:h-[58px] bg-${item.color}`} />
                            
                            {item.icon}
                            <h3 className="text-xl font-semibold mt-3">{item.title}</h3>
                            <ul className="text-gray-400 text-sm mt-6 text-center space-y-2">
                                {item.list.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
