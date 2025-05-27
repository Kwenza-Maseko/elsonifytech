'use client'
import Link from 'next/link'
import { navlinks } from '@/constants'
import { usePathname } from "next/navigation";
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
    const pathname = usePathname();
    const [dropdown, setDropdown] = useState(false);

    return (
        <div className='fixed w-full flex justify-center border-b-[0.5px] border-slate-600 backdrop-blur-lg z-[1000]'>
            <div className="container px-4 lg:px-0 m-auto items-center">

                <div className="flex gap-[100px] justify-between md:justify-start">
                    <div className="py-4 relative">
                        <Link href="/" className="relative w-fit">
                            <div className="flex items-center gap-2 text-white">
                                <Image
                                    src="/assets/es logo.png" // Make sure the file name matches exactly
                                    width={50}
                                    height={50}
                                    alt="Elsonify Logo"
                                    className=""
                                />
                                <div className="relative hidden md:flex flex-col gap-2">
                                    <p className="besley-font text-white leading-none">ELSONIFY SOFTWARE</p>
                                    <p className="bellota-regular text-purple-500 leading-none">Innovate Limitless</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className='md:flex gap-8 hidden text-gray-300 '>
                        {navlinks.map((links, index) => (
                            <Link href={links.url} key={index}
                                className={`h-full text-sm flex items-center border-b-2  hover:text-cyan-400/60 capitalize font-bold ${links.url === pathname ? "text-cyan-400 border-cyan-400" : "border-transparent"}`}
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

                {dropdown && (<div className='flex flex-col gap-4 md:hidden my-4 text-gray-300'>
                    {navlinks.map((links, index) => (
                        <Link href={links.url} key={index}
                            className={`${links.url === pathname && "text-cyan-400"} h-full text-sm flex items-center hover:text-cyan-400/60 capitalize font-bold `}
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