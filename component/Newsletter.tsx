'use client'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import SubscribePopover from './SubscribePopover'

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState<React.ReactNode | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null); // Reset message before sending

        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();
            if (res.ok) {
                setMessage("Subscribed Successfully!");
                setEmail(""); // Clear input
            } else {
                setMessage(data.message || "Already subscribed");
            }
        } catch (error) {
            setMessage("Something went wrong. Please try again.");
        }
    };

    return (
        <div className='flex flex-col md:flex-row gap-16 items-center px-4 md:px-0'>
            <div className='flex justify-center w-full'>
                <div>
                    <p className='font-bold mb-4'>Join Our Newsletter</p>
                    <form onSubmit={handleSubmit} className="flex gap-4">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-gray-400 placeholder-gray-100 focus:outline-none focus:ring-0 w-[250px] text-sm"
                        />
                        <button
                            type="submit"
                            className="text-sm font-bold bg-slate-900 text-white p-2 rounded hover:bg-slate-800 w-[70px] cursor-pointer shadow-box"
                        >
                            Join Us
                        </button>
                    </form>
                    {message && <SubscribePopover messages={message} />}
                </div>
            </div>

            <div className=' w-full flex flex-col md:flex-row justify-center md:justify-start'>
                <div className="w-full">
                    <p className='font-bold mb-4'>Chat with the community</p>
                    <div className="flex gap-2 md:gap-4">
                        <Link href="/" className="relative w-[35px] h-[35px]">
                            <Image
                                src={"/assets/linkedin-logo.png"}
                                alt='linkedin'
                                fill
                            />
                        </Link>

                        <Link href="/" className="relative w-[35px] h-[35px]">
                            <Image
                                src={"/assets/facebook-logo.png"}
                                alt='facebook'
                                fill
                            />
                        </Link>

                        <Link href="/" className="relative w-[35px] h-[35px]">
                            <Image
                                src={"/assets/instagram-logo.png"}
                                alt='instagram'
                                fill
                            />
                        </Link>
                        <Link href={"https://discord.com/channels/1351524157975826453/1351524864946733097"} className='shadow-box p-2 px-4 rounded-md' target='_blank'>
                            Join Community Chat
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Newsletter