"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import AnimatedButton from "./AnimatedButton";


const partnersEn = [
  {
    id: "01",
    icon: "/partners/danube2.png",

  },
  {
    id: "02",
    icon: "/partners/sobha2.png",

  },

    {
    id: "03",
     icon: "/partners/al-hamra2.svg",

  },
  {
    id: "04",
    icon: "/partners/binghatti2.png",

  },



];

const Partners = () => {
  const partners = partnersEn;

  return (
    <section className="py-8 pb-6 bg-[var(--foreground)] ">
      <div className="max-w-[1320px] mx-auto px-6 flex  flex-col items-start text-center gap-5 justify-between mb-8 mdLmb-4">
        <h5 className="text-medium md:text-xl font-medium mx-auto gold-text uppercase">Official UAE Development Partners</h5>
      </div>
      <div className="mx-auto  partners-container lg:hidden ">
        
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },

              1024: {
                slidesPerView: 4,
              },
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            grabCursor={true}
            pagination={{ clickable: true }}
            className=""

          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id} >
                <div className="transition-all duration-300 relative top-0 hover:top-[-6px]">
                  <Image
                    src={partner.icon}
                    alt="logo"
                    className="w-full max-h-[70px] max-w-[150px] h-full object-contain mx-auto"
                    width={300}
                    height={300}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        

      </div>
      <div className="max-w-[1200px] mx-auto hidden lg:block px-6">
        <div className="  p-4 lg:p-8 partners-container">
          <div className="grid grid-cols-4 gap-4">

            {partners.map((partner) => (
              <div key={partner.id} className="flex items-center justify-center">
                <div className="transition-all w-full duration-300 relative top-0 hover:top-[-6px]">
                  <Image
                    src={partner.icon}
                    alt="logo"
                    className="w-full max-w-[180px] max-h-[90px] h-full object-contain mx-auto"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Partners;
