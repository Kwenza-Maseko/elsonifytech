import Image from 'next/image'
import React from 'react'
import SlideShow from './SlideShow'

const AboutUs = () => {
  return (
    <div className='my-16 text-gray-400'>
      <div className="flex flex-col gap-6 items-center">
        <h3 className="text-gray-300 text-center text-xl md:text-2xl  font-bold">
          About <span className="text-cyan-400">Elsonify Software</span> 
        </h3>
        <p className='text-center'>At Elsonify Software, we don’t just build software—we craft innovative, scalable, and impactful digital solutions. </p>

        <p className='w-full md:w-2/3 text-center'>Driven by a passion for technology, creativity, and efficiency, we specialize in web development, mobile applications, business marketing, and cloud hosting. Our mission is to empower businesses and individuals with cutting-edge digital solutions that drive success.</p>
      </div>

      <div className="flex md:flex-row flex-col gap-8 mt-8 text-center">
        <div className="w-full md:max-w-[385px] flex flex-col gap-8 items-center p-4 border border-slate-600 rounded-lg shadow-box">
          <p className="text-lg font-bold text-gray-300">Web Development</p>
          <p>Whether it's a business website, e-commerce platform, or custom web app, we leverage the latest technologies to ensure speed, security, and scalability.</p>

          <Image
            src={"/assets/web development.png"}
            width={385}
            height={375}
            alt='web image'
            className='rounded-lg'
          />
        </div>

        <div className="w-full md:max-w-[385px] flex flex-col gap-8 items-center p-4 border border-slate-600 rounded-lg shadow-box">
          <p className="text-lg font-bold text-gray-300">Business Marketing</p>
          <p>In today’s digital world, business marketing is essential for reaching the right audience and driving growth. We specialize in creating strategic marketing campaigns, leveraging social media, SEO, and targeted advertising to maximize brand visibility. </p>

          <SlideShow />
        </div>

        <div className="w-full md:max-w-[385px] flex flex-col gap-8 items-center p-4 border border-slate-600 rounded-lg shadow-box">
          <p className="text-lg font-bold text-gray-300">Web Hosting</p>
          <p>Reliable web hosting is the foundation of a successful online presence. We provide fast, secure, and scalable hosting solutions tailored to your business needs. Whether it’s a small business website or a large-scale e-commerce platform</p>

          <Image
            src={"/assets/hosting.png"}
            width={385}
            height={375}
            alt='web image'
            className='rounded-lg'
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUs