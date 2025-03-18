import ContactUs from '@/component/ContactUs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "ElsonifyTech - Contact",
    description: "Innovative Limitless. A leading tech company",
};

const Page = () => {

    return (
        <div className="w-full relative">
            <div className="absolute right-0 top-0 bg-slate-800 w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-bl-[300px] z-[1]" />
            <ContactUs/>
        </div>
    );
}

export default Page;
