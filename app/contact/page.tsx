'use client'
import Link from 'next/link';
import { useState } from 'react'

const Page = () => {
    const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

    const handleCopy = (email: string) => {
        navigator.clipboard.writeText(email)
            .then(() => {
                setCopiedEmail(email);
                setTimeout(() => setCopiedEmail(null), 2000);
            })
            .catch(err => console.error('Failed to copy', err));
    };

    return (
        <div className="container mt-[90px] px-4 md:p-0">
            <p className="md:w-2/3 text-2xl md:text-4xl font-black mt-16">
                Support
            </p>
            <div className="flex flex-col gap-[15px] mt-16 text-gray-400">
                <p className='text-gray-300 text-xl font-bold'>Billing & FAQ's</p>
                <p>Found out the service billing prices and for FAQs managed by our support team</p>

                <div className="p-2 rounded bg-gray-800 border w-fit flex gap-4 items-center">
                    <p>info@elsonifytech.com</p>
                    <div
                        className='border-l border-gray-400 pr-2 pl-2 cursor-pointer'
                        onClick={() => handleCopy('info@elsonifytech.com')}
                    >
                        <p>{copiedEmail === 'info@elsonifytech.com' ? 'Copied' : 'Copy'}</p>
                    </div>
                </div>

                <p>Or click to call: <a href="tel:+27691914402" className="text-md">+27 69 191 4402</a></p>

            </div>
            <div className="flex flex-col md:flex-row justify-between gap-[15px] text-gray-400">
                {/* Partnership and Collaboration */}
                <div className="flex flex-col gap-[15px] mt-8 md:mt-16">
                    <p className='text-gray-300 text-xl font-bold'>Partnership and Collaboration</p>
                    <p>For Partnership or investments to grow your business and enjoy the benefits of our services make sure you contact us</p>

                    <div className="p-2 rounded bg-gray-800 border w-fit flex gap-4 items-center">
                        <p>partnership@elsonifytech.com</p>
                        <div
                            className='border-l border-gray-400 pr-2 pl-2 cursor-pointer'
                            onClick={() => handleCopy('partnership@elsonifytech.com')}
                        >
                            <p>{copiedEmail === 'partnership@elsonifytech.com' ? 'Copied' : 'Copy'}</p>
                        </div>
                    </div>
                </div>

                {/* Sales */}
                <div className="flex flex-col gap-[15px] mt-8 md:mt-16">
                    <p className='text-gray-300 text-xl font-bold'>Sales</p>
                    <p>If you're a big company or a small one or need something special, let us know and we'll find a solution.</p>

                    <div className="p-2 rounded bg-gray-800 border w-fit flex gap-4 items-center">
                        <p>sales@elsonifytech.com</p>
                        <div
                            className='border-l border-gray-400 pr-2 pl-2 cursor-pointer'
                            onClick={() => handleCopy('sales@elsonifytech.com')}
                        >
                            <p>{copiedEmail === 'sales@elsonifytech.com' ? 'Copied' : 'Copy'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
