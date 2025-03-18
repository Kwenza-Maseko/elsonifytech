'use client'
import { useState } from 'react'

const ContactUs = () => {
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

        <div className="w-full relative">
            <div className="container mt-[130px] px-4 md:p-0 m-auto relative z-[10]">
                <p className="md:w-2/3 text-2xl md:text-4xl font-black mt-16">
                    Support
                </p>
                <div className="flex flex-col gap-[15px] mt-16 text-gray-400">
                    <p className='text-gray-300 text-xl font-bold'>Billing & FAQ&rsquo;s</p>
                    <p>Found out the service billing prices and for FAQs managed by our support team</p>

                    <div className="p-2 rounded bg-gray-800 border w-fit flex gap-4 items-center">
                        <p>elsonifytechwork@gmail.com</p>
                        <div
                            className='border-l border-gray-400 pr-2 pl-2 cursor-pointer'
                            onClick={() => handleCopy('elsonifytechwork@gmail.com')}
                        >
                            <p>{copiedEmail === 'elsonifytechwork@gmail.com' ? 'Copied' : 'Copy'}</p>
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
                            <p>kwenzaelson80@gmail.com</p>
                            <div
                                className='border-l border-gray-400 pr-2 pl-2 cursor-pointer'
                                onClick={() => handleCopy('kwenzaelson80@gmail.com')}
                            >
                                <p>{copiedEmail === 'kwenzaelson80@gmail.com' ? 'Copied' : 'Copy'}</p>
                            </div>
                        </div>
                    </div>

                    {/* Sales */}
                    <div className="flex flex-col gap-[15px] mt-8 md:mt-16">
                        <p className='text-gray-300 text-xl font-bold'>Sales</p>
                        <p>If you&rsquo;re a big company or a small one or need something special, let us know and we&rsquo;ll find a solution.</p>

                        <div className="p-2 rounded bg-gray-800 border w-fit flex gap-4 items-center">
                            <p>kwenzangcamane@gmail.com</p>
                            <div
                                className='border-l border-gray-400 pr-2 pl-2 cursor-pointer'
                                onClick={() => handleCopy('kwenzangcamane@gmail.com')}
                            >
                                <p>{copiedEmail === 'kwenzangcamane@gmail.com' ? 'Copied' : 'Copy'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
