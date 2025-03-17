import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'

const Newsletter = () => {
    return (
        <div className='flex flex-col md:flex-row gap-16 items-center px-4 md:px-0'>
            <div className='flex justify-center w-full'>
                <div>
                    <p className='font-bold mb-4'>Join Our Newsletter</p>
                    <div className="flex gap-4">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            required
                            className="bg-gray-400 placeholder-gray-100 focus:outline-none focus:ring-0 w-[250px] text-sm"
                        />
                        <Button className='shadow-box'>Join</Button>
                    </div>
                </div>
            </div>

            <div className=' w-full'>
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
                    <Link href={"/community"} className='shadow-box p-2 px-4 rounded-md'>
                        Join Community Chat
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Newsletter