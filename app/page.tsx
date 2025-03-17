import Image from "next/image";
import { Code, Briefcase, Server, Smartphone, MoreHorizontal } from "lucide-react";
import Welcome from "@/component/Welcome";
import AboutUs from "@/component/AboutUs";
import Services from "@/component/Services";
import Testimonials from "@/component/Testimonials";
import Rate from "@/component/Rate";


export default function Home() {
  return (
    <div className="container mt-[90px] px-4 container m-auto items-center">
      {/* Hero Section */}
      <p className="md:w-2/3 text-2xl md:text-4xl font-black mt-16">
        Innovate. Build. Deploy. 🚀 <br />
        Transforming Ideas into Scalable Tech Solutions.
      </p>
      <p className="md:w-2/3 mt-6 text-gray-400">
        Welcome to ElsonifyTech – Where Innovation Meets Execution.
      </p>
      <div className="flex flex-wrap gap-4 md:gap-8 mt-6">
        <div className="flex gap-4 items-center bg-blue-500 rounded-lg p-4 border border-blue-600 shadow-lg">
          <Code size={20} />
          Web Development
        </div>
        <div className="flex gap-4 items-center bg-green-500 rounded-lg p-4 border border-green-600 shadow-lg">
          <Briefcase size={20} />
          Business Marketing
        </div>
        <div className="flex gap-4 items-center bg-purple-500 rounded-lg p-4 border border-purple-600 shadow-lg">
          <Server size={20} />
          Website Hosting
        </div>
        <div className="flex gap-4 items-center bg-orange-500 rounded-lg p-4 border border-orange-600 shadow-lg">
          <Smartphone size={20} />
          Mobile Development
        </div>
        <div className="flex gap-4 items-center bg-gray-500 rounded-lg p-4 border border-gray-600 shadow-lg">
          <MoreHorizontal size={20} />
          More
        </div>
      </div>
      {/* Video Section */}
     <Welcome/>
     <AboutUs/>
     <Services/>
     <Testimonials/>
    </div>
  );
}
