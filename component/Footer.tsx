import { navlinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='my-10'>
            <div className='py-6 flex flex-wrap gap-[30px] md:gap-[15px]'>
                <div className=" w-[385px]">
                    <div className="relative w-fit">
                        <div className="flex gap-[4.5px] text-whites">
                            <p className='besley-font drop-shadow-[0_0_1.5px_rgba(255,255,255,0.5)] '>els</p>
                            <p className='besley-font drop-shadow-[0_0_1.5px_rgba(255,255,255,0.5)] '>nifytech .</p>
                        </div>

                        <p className='besley-font absolute left-[33px] top-0 text-outline'>o</p>

                        <p className='bellota-regular absolute right-0 top-[33px] text-gray-200'>Innovate Limitless</p>
                    </div>

                    <div className="text-gray-300 mt-10">
                        <p className='text-lg font-bold'>Company Information</p>

                        <div className="flex flex-col gap-4 text-gray-400 mt-4 md:mt-6">
                            <p>
                                elsonifytechwork@gmail.com
                            </p>
                            <p className='text-lg'>
                                +27 69 191 4401
                            </p>
                        </div>
                    </div>

                </div>

                <div className="w-[385px]">
                    <div className="text-gray-300">
                        <p className='text-lg font-bold'>Quick Links</p>

                        <div className="flex flex-col gap-4 text-gray-400 mt-4 md:mt-8">
                            {navlinks.map((links, index) => (
                                <Link href={`${links.url}`} key={index} className='capitalize hover:font-semibold hover:text-gray-300 w-fit'>
                                    {links.link}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-[385px]">
                    <div className="text-gray-300">
                        <p className='text-lg font-bold'>Services</p>

                        <div className="flex flex-col gap-4 text-gray-400 mt-4 md:mt-8">
                            <p>
                                Web Development
                            </p>
                            <p>
                                Business Marketing
                            </p>
                            <p>
                                Web Hosting
                            </p>
                            <p>
                                Mobile App Development
                            </p>
                            <p>
                                SEO Optimization
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer