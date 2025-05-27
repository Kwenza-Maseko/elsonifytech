import { Code, Briefcase, Server, Smartphone, MoreHorizontal } from "lucide-react";
import Welcome from "@/component/Welcome";
import AboutUs from "@/component/AboutUs";
import Services from "@/component/Services";
import Testimonials from "@/component/Testimonials";


export default function Home() {
  return (
    <div className="w-full relative">
      {/* Background Shape (Lower z-index) */}
      <div className="absolute right-0 top-0 bg-slate-800 w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-bl-[300px] z-[1]" />

      {/* Content (Higher z-index) */}
      <div className="container mt-[130px] px-4 lg:px-0 m-auto items-center relative z-[10]">

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="w-full text-center md:text-start">
            <h1 className="text-3xl md:text-4xl font-black">
              Innovate. Build. Deploy. 🚀 <br className="hidden md:block"/>
              <span className="text-cyan-400">Transforming Ideas</span> into Scalable Tech Solutions.
            </h1>
            <p className="mt-6 text-gray-400">
              Welcome to Elsonify Software – Where Innovation Meets Execution.
            </p>
          </div>

          <div className="w-full md:w-[75%] lg:w-[50%] flex flex-col gap-2">
            <div className="w-full rounded-xl p-8 flex flex-col gap-2 bg-slate-600/50 backdrop-blur-lg">
              <div className="flex gap-4">
                <div className="h-[7px] w-[7px] rounded-full bg-orange-500/60" />
                <div className="h-[7px] w-[50%] rounded-lg bg-orange-500/60" />
              </div>
              <div className="flex gap-4">
                <div className="h-[7px] w-[7px] rounded-full bg-blue-500/60" />
                <div className="h-[7px] w-[80%] rounded-lg bg-blue-500/60" />
              </div>
              <div className="flex gap-4">
                <div className="h-[7px] w-[7px] rounded-full bg-cyan-500/60" />
                <div className="h-[7px] w-[75%] rounded-lg bg-cyan-500/60" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-full rounded-xl p-8 flex flex-col items-center gap-2 bg-slate-600/50 backdrop-blur-lg">
                <div className="rounded-full border-4 p-4 border-green-500 w-[50px] h-[50px] flex items-center justify-center">
                  <p className="text-md text-gray-300">99%</p>
                </div>

                <p className="text-lg font-black text-gray-300">SEO</p>
              </div>
              <div className="flex justify-center">
                <div className="w-full rounded-xl p-8 flex items-end gap-2 bg-slate-600/50 backdrop-blur-lg">
                  <div className="w-[7px] h-[20%] rounded-lg bg-orange-500/60" />
                  <div className="w-[7px] h-[50%] rounded-lg bg-blue-500/60" />
                  <div className="w-[7px] h-[80%] rounded-lg bg-cyan-500/60" />
                  <div className="w-[7px] h-[40%] rounded-lg bg-purple-500/60" />
                </div>
              </div>

            </div>
          </div>
        </div>


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
    </div>
  );
}
