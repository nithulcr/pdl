"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from 'swiper';
import "swiper/css/effect-fade";
import "swiper/css";
import Image from "next/image";
import SignatureIcon from "../components/SignatureIcon";

type SlideContent = {
  imageSrc?: string;
  videoSrc?: string;
  heading?: string;
  description1?: string;
  contactLink?: string;
};

const slidesContent: SlideContent[] = [
  {
    imageSrc: "/bg5.png",
    heading: "Two worlds. One standard of excellence.",
    description1:
      "Host On PDL builds enterprise-grade software and digital infrastructure — and stewards investment access into Dubai's most trusted developments. One company, two disciplines, a single promise of precision.",
    contactLink: "#",
  },
  //  {
  //   imageSrc: "/it-banner.png",
  //   heading: "Digital solutions",
  //   description1:
  //     "Web, API, AI & AUtomation",
  //   contactLink: "#",
  // },
  // {
  //   imageSrc: "/it-banner.png",
  //   heading: "10 + Years of Excellence",
  //   description1:
  //     "500+ Clients Managed Globally",
  //   contactLink: "#",
  // },
  // {
  //   imageSrc: "/banners/hero2.webp",
  //   heading: "Work Closly with  Leading.",
  //   description1:
  //     "Developers & Chanel Partners Globally",
  //   contactLink: "#",
  // },
  // {
  //   imageSrc: "/hero1.png",
  //   heading: "Authorized Channel Partner",
  //   description1:
  //     "Binghatti Developers | Danube Properties | Sobha Realty",
  //   contactLink: "#",
  // },

  // {
  //   videoSrc: "/video.mp4",
  //   heading: "",
  //   description1: "",
  //   contactLink: "",
  // },
];

const HeroMain = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  return (
    <div className="relative flex bg-[var(--siteColor)]">
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        loop={true}
        speed={1500}
        onSwiper={(swiper: SwiperType) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          const realIndex = swiper.realIndex;
          setActiveIndex(realIndex);

          const current = slidesContent[realIndex];

          if (current.videoSrc) {
            // On video slide: ensure video plays from start
            const videoEl = videoRefs.current[realIndex];
            if (videoEl) {
              try {
                videoEl.currentTime = 0;
                void videoEl.play();
              } catch {
                // ignore play() promise errors
              }
            }
          }
        }}
        className="w-full hero text-white flex flex-col md:min-h-screen justify-center items-center px-6 relative xl:mt-[38px]"
      >
        {slidesContent.map((slide, index) => (
          <SwiperSlide key={index} className="h-full">
            {/* Background: image OR video */}
            <div className="absolute hero-cover hero-cover2 md:min-h-screen inset-0 bg-cover h-full bg-center">
              {slide.imageSrc ? (
                <Image
                  src={slide.imageSrc}
                  width={1000}
                  height={1000}
                  alt="bg"
                  className="w-full h-full object-cover relative"
                />
              ) : slide.videoSrc ? (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={slide.videoSrc}
                  muted
                  playsInline
                  className="w-full h-full object-contain lg:object-cover relative"
                  onEnded={() => {
                    const swiper = swiperRef.current;
                    if (swiper) {
                      swiper.slideNext();        // go to next slide
                    }
                  }}
                />
              ) : null}
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 max-w-[1360px] mx-auto min-h-screen  px-6 py-20 lg:pt-34 lg:py-26 h-full flex flex-col justify-center"
            >
              <div className="flex flex-col gap-5 max-w-[650px] font-[200]">
                <div className="flex items-center gap-2   uppercase text-sm">
                  <SignatureIcon width={20} height={20} className="invert" />
                  IT Solutions & Official UAE Real Estate Partner
                </div>

                {slide.heading && (
                  <h1
                    className="text-5xl md:text-[95px] font-semibold mb-2 head-font max-w-[600px]"
                    dangerouslySetInnerHTML={{ __html: slide.heading }}
                  />
                )}
                {slide.description1 && (

                  <p className="md:text-lg font-[200]">
                    {slide.description1}
                  </p>

                )}
                {slide.contactLink && (
                  <div className="flex flex-wrap gap-4 mt-1 max-w-[540px]">
                    <AnimatedButton
                      href={slide.contactLink}
                      label="Book a Consultation"
                      className="w-fit transparent-btn"
                    />
                    <AnimatedButton
                      href={slide.contactLink}
                      label="View Portfolio"
                      className="w-fit"
                    />
                  </div>
                )}


                <div className="absolute left-1/2 -translate-x-1/2 bottom-[20px] lg:bottom-[90px] flex gap-3 z-20 hidden">
                  {slidesContent.map((_, i) => {
                    const isActive = i === activeIndex;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          if (swiperRef.current) {
                            swiperRef.current.slideToLoop(i);
                          }
                        }}
                        className={`w-[40px] lg:w-[70px] h-[2px] cursor-pointer ${isActive ? "bg-white" : "bg-white/25"
                          }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroMain;
