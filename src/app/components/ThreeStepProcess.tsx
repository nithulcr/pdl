// components/ThreeStepProcess.tsx

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useStaggeredFadeUp } from "./useStaggeredFadeUp";
import SignatureIcon from "../components/SignatureIcon";



const steps = [
    {
        title: "Origin",
        number: '01',
        description: "Founded as a web & software development studio serving regional businesses.",
    },
    {
        title: "Expansion",
        number: '02',
        description: "Grew into mobile, cloud and AI-driven product engineering for enterprise clients.",
    },
    {
        title: "UAE Entry",
        number: '03',
        description: "Formed official channel partnerships with leading Dubai developers.",
    },
    {
        title: "Today",
        number: '04',
        description: "A unified technology and real estate advisory house serving global clients.",
    },

];

export default function ThreeStepProcess() {
    const fadeRef = useRef<HTMLHeadingElement>(null);
    useStaggeredFadeUp(fadeRef as React.RefObject<HTMLElement>);
    return (
        <section className=" py-14 lg:py-24 relative bottom-shape overflow-hidden bg-[var(--background)]">
            <div className="max-w-[1360px] mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }} className="heading flex flex-col gap-4  items-center  mx-auto mb-7 md:mb-10">
                    
                        <div className="flex items-center gap-2 text-site mb-1 uppercase text-sm justify-center md:justify-start">
                            <SignatureIcon width={20} height={20} />
                           Our Path
                        </div>
                        <div className=" gap-2  lg:gap-8">
                            <h2 ref={fadeRef} className="text-center fade-up-stagger text-3xl lg:text-[46px] max-w-[400px] font-medium mb-1  text-site">
                              A timeline of two disciplines
                            </h2>
                        </div>

                    
                   
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5  justify-center">




                    {steps.map((step, idx) => (
                        <div key={step.title} className="flex-1 flex flex-col process-card rounded-2xl p-4 lg:p-8  bg-[var(--background2)] relative transition-all duration-500 relative top-0 hover:top-[-5px]">
                            <svg width="54" height="54" viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="process-card-svg">
                                <circle cx="28.7426" cy="29.1167" r="28.1875" fill="#e7e7e7ff" />
                                <circle cx="28.7425" cy="29.1165" r="22.3797" fill="white" />
                                <path d="M21.3978 29.1167H23.2606M33.3197 29.1167L28.849 24.646M33.3197 29.1167L28.849 33.5874M33.3197 29.1167H25.496" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="gold-text mb-2 md:mb-4 text-4xl md:text-7xl font-semibold bg-[linear-gradient(180deg,#000_16%,#D4AF37_88%)] bg-clip-text text-transparent">
                                {step.number}
                            </div>


                            <div className="bg-[var(--blue1)] w-full">

                                <h3 className="text-xl md:text-[24px] font-bold mb-1 text-site">{step.title}</h3>
                                <p className="font-light text-xs md:text-sm  max-w-[310px] pb-2 leading-tight">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
