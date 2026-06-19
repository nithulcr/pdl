"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from 'swiper';
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

const slidesContent = [
  {
    imageSrc: "/it-banner.jpg",
    heading: "15+ Years of Excellence in IT, Digital Growth",
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    contactLink: "#",
  },
  {
    imageSrc: "/ai.jpg",
    heading: "Lead Generation Meta and Google Using Ai & Automation.",
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    contactLink: "#",
  },
  {
    imageSrc: "/real-estate-bg.jpg",
    heading: "Technology Marketing  Real Estate One Growth Ecosystem.",
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    contactLink: "#",
  },
  {
    imageSrc: "/hero1.png",
    heading: "Authorized Channel Partner",
    description1:
      "Binghatti Developers | Danube Properties | Sobha Realty",
    contactLink: "#",
  },

  {
    videoSrc: "/video.mp4",
    heading: "",
    description1: "",
    contactLink: "",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  return (
    <div className="relative flex bg-[var(--siteColor)]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
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
            // On video slide: stop autoplay and ensure video plays from start
            swiper.autoplay.stop();
            const videoEl = videoRefs.current[realIndex];
            if (videoEl) {
              try {
                videoEl.currentTime = 0;
                void videoEl.play();
              } catch {
                // ignore play() promise errors
              }
            }
          } else {
            // On normal slides: ensure autoplay is running
            if (!swiper.autoplay.running) {
              swiper.autoplay.start();
            }
          }
        }}
        className="w-full hero text-white flex flex-col md:min-h-screen justify-center items-center text-center px-6 relative xl:mt-[34px]"
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
                      swiper.autoplay.start();   // resume autoplay for image slides
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
              className="relative z-10 max-w-[1360px] min-h-screen mx-auto px-6 py-30 lg:py-20 h-full flex flex-col items-end justify-end text-right"
            >
              {slide.heading && (
                <h1
                  className="text-5xl md:text-[60px] font-semibold mb-2 head-font max-w-[600px]"
                  dangerouslySetInnerHTML={{ __html: slide.heading }}
                />
              )}
              {slide.description1 && (
                <div className="my-4 lg:my-2 max-w-[540px]">
                  <p className="text-lg md:text-xl my-2 font-light2 max-w-lg">
                    {slide.description1}
                  </p>
                </div>
              )}
              {/* {slide.contactLink && (
                <div className="flex flex-wrap gap-4 mt-1 max-w-[540px]">
                  <AnimatedButton
                    href={slide.contactLink}
                    label="Let's Build"
                    className="w-fit transparent-btn"
                  />
                </div>
              )}  */}

             
              <div className="absolute right-8 xl:right-0 bottom-[20px] lg:bottom-[90px] flex gap-3 z-20">
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
                      className={`w-[40px] lg:w-[70px] h-[2px] cursor-pointer ${
                        isActive ? "bg-white" : "bg-white/25"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  );
                })}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
