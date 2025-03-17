'use client'
import Link from 'next/link'
import { navlinks } from '@/constants'
import { usePathname } from "next/navigation";
import { useState } from 'react';

const Navbar = () => {
    const pathname = usePathname();
    const [dropdown, setDropdown] = useState(false);

    
    return (
        <div className='fixed w-full flex justify-center border-b-[0.5px] border-slate-600 backdrop-blur-lg z-[1000]'>
            <div className="container px-4 lg:px-0 m-auto items-center">

                <div className="flex gap-[50px] justify-between md:justify-start">
                    <div className="py-4">
                        <Link href="/" className="relative w-fit">
                            <div className="flex gap-[4.5px] text-whites">
                                <p className='besley-font drop-shadow-[0_0_1.5px_rgba(255,255,255,0.5)] '>els</p>
                                <p className='besley-font drop-shadow-[0_0_1.5px_rgba(255,255,255,0.5)] '>nifytech .</p>
                            </div>

                            <p className='besley-font absolute left-[33px] top-0 text-outline'>o</p>

                            <p className='bellota-regular absolute right-0 top-[33px] text-gray-200'>Innovate Limitless</p>
                        </Link>
                    </div>

                    <div className='md:flex gap-8 hidden'>
                        {navlinks.map((links, index) => (
                            <Link href={links.url} key={index}
                                className={`${links.url === pathname && "text-cyan-400 border-cyan-400"} h-full text-gray-300 text-sm flex items-center border-b-2 border-transparent hover:border-cyan-400 hover:text-cyan-400 capitalize font-bold `}
                            >
                                {links.link}
                                
                            </Link>
                        ))}
                    </div>

                    <div className='cursor-pointer flex items-center gap-8 md:hidden'
                        onClick={() => { setDropdown((prev) => !prev) }}
                    >
                        <div className='flex flex-col items-end gap-[4px] p-2 border border-slate-500 rounded'>
                            <div className='w-[15px] h-[2px] bg-slate-500 rounded' />
                            <div className='w-[12px] h-[2px] bg-slate-500 rounded' />
                            <div className='w-[15px] h-[2px] bg-slate-500 rounded' />
                        </div>
                    </div>
                </div>

                {dropdown && (<div className='flex flex-col gap-4 md:hidden my-4'>
                    {navlinks.map((links, index) => (
                        <Link href={links.url} key={index}
                            className={`${links.url === pathname && "text-cyan-400"} h-full text-gray-300 text-sm flex items-center hover:text-cyan-400 capitalize font-bold `}
                            onClick={() => setDropdown(false)}>
                            {links.link}
                        </Link>
                    ))}
                </div>)}


            </div>
        </div>
    )
}

export default Navbar