'use client';

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useStaggeredFadeUp } from "./useStaggeredFadeUp";
import Image from "next/image";
import SignatureIcon from "../components/SignatureIcon";


const features = [
    {
        icon: "/high-roi.png",
        title: "Vision",
        desc: "To be the single trusted bridge between technology ambition and real estate wealth in the UAE.",
    },
    {
        icon: "/mission.png",

        title: "Mission",
        desc: "Deliver enterprise-grade execution and transparent, developer-backed investment access.",
    },

];


export default function Insights() {
    const fadeRef = useRef<HTMLHeadingElement>(null);
    useStaggeredFadeUp(fadeRef as React.RefObject<HTMLElement>);
    return (
        <section className=" bg-[var(--background2)] py-14 lg:py-24 rounded-3xl relative top-shape overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-4 md:px-6 flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                <div className="flex flex-col">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }} className="heading flex flex-col gap-2 ">


                        <div className="flex  gap-2 text-site mb-3 uppercase text-sm  md:justify-start">
                            <SignatureIcon width={20} height={20} />

                            About Host On PDL
                        </div>
                        <div className=" mb-5">
                            <h2 ref={fadeRef} className="fade-up-stagger  mb-5 text-3xl lg:text-[50px] max-w-[500px]  leading-none">
                                Built on code.
                                Anchored in Dubai.
                            </h2>
                            <p className="text-black/70 font-[300]   text-justify">
                                {/* Host On PDL began as a technology studio and grew into something rarer: a firm trusted equally by enterprise clients who need software that performs, and by investors who need a partner that understands the UAE property market from the inside.
                                <br />
                                <br /> */}
                                Today we operate two disciplines under one standard — engineering teams shipping web, mobile and cloud products, and an advisory desk working directly with SOBHA Realty, Binghatti, Danube Properties and Al Hamra to place client capital into the right development, at the right stage.</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {features.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex gap-5 items-start group"
                                >
                                    {/* Icon */}
                                    <div className="flex-shrink-0 w-16 h-16 bg-primary flex items-center justify-center text-on-primary transform group-hover:rotate-12 transition-transform duration-300">
                                        <span className="bg-[var(--siteColor)] p-2">
                                            <Image
                                                src={item.icon}
                                                alt={item.title}
                                                width={40}
                                                height={40}
                                                className="object-contain"
                                            />
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="font-headline text-lg font-bold uppercase tracking-tighter">
                                            {item.title}
                                        </h3>
                                        <p className="opacity-80 text-sm  leading-tight font-light">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </motion.div>

                </div>
                <motion.div
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }} className="relative  h-full w-full">

                    <div className="bg-img   overflow-hidden  ml-auto max-w-[94%] h-[94%] ">
                        <Image
                            src="/insights.png"
                            alt="Insights"
                            width={1000}
                            height={1000}
                            className="object-cover   w-full h-full"
                        />
                    </div>
                    <div className="bg-[var(--siteColor)] max-w-[300px] p-4 lg:p-7 absolute left-0 bottom-0 text-white space-y-2 md:space-y-3">
                        
                        
                        <div className="flex items-center gap-2   uppercase text-sm md:text-md   relative">
                            <span className="text-3xl md:text-5xl font-black gold-text">7+</span>
                        </div>
                        <h5 className="text-sm">Years navigating both software delivery and Dubai&apos;s market cycles</h5>

                    </div>


                </motion.div>

            </div>
        </section>
    );
}
