"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedButton from "./AnimatedButton";


const slidesContent = [
  {
    imageSrc: "/web-application.png",
    heading: "Digital Solutions",
    description: "Web, API, AI & Automation",
  },
  {
    imageSrc: "/marketing.png",
    heading: "10 + Years of Excellence",
    description: "500+ Clients Managed Globally",
  },
  {
    imageSrc: "/business-centre.png",
    heading: "Work Closely with Leading",
    description: "Developers & Channel Partners Globally",
  },
  {
    imageSrc: "/trusted-partners.jpg",
    heading: "Authorized Channel Partner",
    description: "Binghatti Developers | Danube Properties | Sobha Realty",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slidesContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex bg-[var(--siteColor)] min-h-screen">
      {/* Static Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/it-banner.png"
          fill
          alt="background"
          className="object-cover"
          priority
        />

      </div>

      {/* Content Slider */}
      <div className="relative z-10 max-w-[1360px] min-h-screen mx-auto w-full px-6  py-15 h-full flex flex-col md:grid grid-cols-2 justify-between  text-white">

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
        <div className="max-w-[280px] ml-auto text-right flex flex-col justify-end gap-4 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-end"
            >
              {/* Slide Image */}
              <div className="mb-2">
                <Image
                  src={slidesContent[activeIndex].imageSrc}
                  width={280}
                  height={280}
                  alt={slidesContent[activeIndex].heading}
                  className="object-cover rounded-xl w-[280px] h-[200px]"
                />
              </div>

              {/* <div className="text-3xl md:text-5xl font-semibold mb-2">
              {slidesContent[activeIndex].heading}
            </div> */}
              <div className="my-1">
                <p className="text-lg md:text-xl leading-tight font-light">
                  {slidesContent[activeIndex].description}
                </p>
              </div>

            </motion.div>
          </AnimatePresence>
          <div className="flex gap-3  ml-auto">
            {slidesContent.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-[30px] lg:w-[50px] h-[2px] cursor-pointer transition-colors ${i === activeIndex ? "bg-white" : "bg-white/25"
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
