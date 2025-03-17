import { Code, Briefcase, Server, Smartphone, MoreHorizontal } from "lucide-react";
import Welcome from "@/component/Welcome";
import AboutUs from "@/component/AboutUs";
import Services from "@/component/Services";
import Testimonials from "@/component/Testimonials";


export default function Home() {
  return (
    <div className="container mt-[50px] md:mt-[90px] px-4 lg:px-0 container m-auto items-center">
      {/* Hero Section */}
      <p className="md:w-2/3 text-2xl md:text-4xl font-black mt-16">
        Innovate. Build. Deploy. 🚀 <br />
        Transforming Ideas into Scalable Tech Solutions.
      </p>
      <p className="md:w-2/3 mt-6 text-gray-400">
        Welcome to ElsonifyTech – Where Innovation Meets Execution.
      </p>
      <div className="flex flex-wrap gap-2 md:gap-6 mt-6 w-full justify-center  orange-box rounded-2xl p-2 md:p-4">
        <div className="flex flex-col gap-2 md:gap-4 items-center rounded-lg p-2 ">
          <div className="border border-blue-600 shadow-lg rounded-3xl  bg-blue-500 p-4">
            <Code size={20} />
          </div>
          Web Development
        </div>
        <div className="flex flex-col gap-2 md:gap-4 items-center rounded-lg p-2 ">
          <div className="border border-green-600 shadow-lg rounded-3xl  bg-green-500 p-4">
            <Briefcase size={20} />
          </div>
          Business Marketing
        </div>
        <div className="flex flex-col gap-2 md:gap-4 items-center rounded-lg p-2 ">
          <div className="border border-purple-600 shadow-lg rounded-3xl  bg-purple-500 p-4">
            <Server size={20} />
          </div>
          Website Hosting
        </div>
        <div className="flex flex-col gap-2 md:gap-4 items-center rounded-lg p-2 ">
          <div className="border border-orange-600 shadow-lg rounded-3xl  bg-orange-500 p-4">
            <Smartphone size={20} />
          </div>
          Mobile Development
        </div>
        <div className="flex flex-col gap-2 md:gap-4 items-center p-2 ">
          <div className="border border-gray-600 shadow-lg rounded-3xl  bg-gray-500 p-4">
            <MoreHorizontal size={20} />
          </div>
          More
        </div>
      </div>
      
      <Welcome />
      <AboutUs />
      <Services />
      <Testimonials />
    </div>
  );
}
