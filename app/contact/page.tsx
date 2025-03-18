import ContactUs from '@/component/ContactUs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "ElsonifyTech - Contact",
    description: "Innovative Limitless. A leading tech company",
};

const Page = () => {

    return (
        <div className="w-full">
            <ContactUs />
        </div>
    );
}

export default Page;
