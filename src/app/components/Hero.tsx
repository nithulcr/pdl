"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedButton from "./AnimatedButton";


const slidesContent = [
  {
    imageSrc: "/it-banner.png",
    heading: "10+ Years Experience With a Team of Experts",
    description: "380 + Clients Websites Delivered India, USA, Canada and UK. ",
  },
  {
    imageSrc: "/it-banner.png",
    heading: "Website Development | API Integration | Meta Lead Management",
    description: "Using Latest Technology and Tools.",
  },
  {
    imageSrc: "/business-centre.png",
    heading: "Driving High-Quality Investor & Buyer Leads Through",
    description: "Meta Ads | Google Ads | AI Automation",
  },
  {
    imageSrc: "/trusted-partners.jpg",
    heading: "AI- Powered Automation Tools",
    description: "From Lead Generation to Sales Conversion with",
  },
  {
    imageSrc: "/trusted-partners.jpg",
    heading: "Partner with UAE's Leading Builders & Developers",
    description: "6 Plus Years of Excellence in Real estate Dubai & PAN India Market",
  },
  {
    imageSrc: "/trusted-partners.jpg",
    heading: "Helping Developers and Chanel Partners ",
    description: "Scale Revenue with Smarter Digital Ecosystems.",
  },
  {
    imageSrc: "/banners/hero2.webp",
    heading: "Specialists in Real Estate Lead Generation for",
    description: "Dubai | Abu Dhabi | Ras Al Khaimah Off-Plan Projects",
  },
 
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slidesContent.length);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex bg-[var(--siteColor)] min-h-screen">
      {/* Static Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg2.jpg"
          fill
          alt="background"
          className="object-cover"
          priority
        />

      </div>

      {/* Content Slider */}
      <div className="relative z-10 max-w-[1360px] min-h-screen mx-auto w-full px-6  pt-15 pb-5 h-full flex flex-col md:grid grid-cols-2 justify-between  text-white">

        <div className="flex flex-col  justify-center">
          <h1
            className="text-5xl md:text-[65px]  mb-2 head-font"
          >
            Digital Growth & Business Transformation
          </h1>
          <p className="text-lg md:text-xl leading-tight font-light max-w-[500px] mt-3">At Host on PDL, we deliver cutting-edge technology solutions tailored to your unique business needs.</p>
          <div className="flex flex-wrap gap-4 mt-5 max-w-[540px]">
            <AnimatedButton
              href=""
              label="Connect WIth Us"
              className="w-fit transparent-btn"
            />

          </div>
        </div>
        <div className="max-w-[380px] ml-auto flex flex-col justify-end gap-4 overflow-hidden">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex items-end "
            >
              {slidesContent.map((slide, i) => (
                <div key={i} className="w-full flex-shrink-0">
                  <div className="flex flex-col bg-[#012e31] p-2 rounded-xl">
                    {/* Slide Image */}
                    <div className="mb-2">
                      <Image
                        src={slide.imageSrc}
                        width={380}
                        height={380}
                        alt={slide.heading}
                        className="object-cover rounded-xl w-[380px] h-[180px]"
                      />
                    </div>
                    <div className="my-1 p-2">
                      <h2 className="text-xl md:text-2xl leading-tight">
                        {slide.heading}
                      </h2>
                      <p className="leading-tight font-light mt-2">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="flex gap-3  ml-auto">
            {slidesContent.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-[30px]  h-[2px] cursor-pointer transition-colors ${i === activeIndex ? "bg-white" : "bg-white/25"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};

export default Hero;
