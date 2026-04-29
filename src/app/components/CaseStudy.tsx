"use client";
import { useRef, useState, useEffect } from "react";
import { useStaggeredFadeUp } from "./useStaggeredFadeUp";
import { motion } from "framer-motion";
import SignatureIcon from "../components/SignatureIcon";
import Image from "next/image";
import AnimatedButton from "../components/AnimatedButton";


const caseStudies = [
    {
        title: "Sobha Reality Sobha Elwood",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        image: "/apartments.png",
        video: "/video.mp4",
    },
    {
        title: "Danube Properties - BAYZ 102 Marina",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        image: "/townhouse.png",
        video: "/video.mp4",
    },
    {
        title: "Fairmont Residence - Ras Al Khaima",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        image: "/villa.png",
        video: "/video.mp4",
    },


];

const CaseStudy = () => {
    const containerRef = useRef<HTMLElement | null>(null);
    const fadeRef = useRef<HTMLHeadingElement>(null);
    useStaggeredFadeUp(fadeRef as unknown as React.RefObject<HTMLElement>);

    // Index of the currently showing/playing video. Null means nothing is hovered and it's auto-play mode.
    const [playingIdx, setPlayingIdx] = useState(0);
    const [isManual, setIsManual] = useState(false); // true if user is hovering a card
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    useEffect(() => {
        // When not in manual mode, set up auto-play switching between videos
        if (!isManual) {
            const currentRef = videoRefs.current[playingIdx];
            const handler = () => setPlayingIdx((idx) => (idx + 1) % caseStudies.length);

            if (currentRef) {
                currentRef.currentTime = 0; // Reset video to start
                currentRef.play();
                currentRef.onended = handler;
            }
            return () => {
                if (currentRef) currentRef.onended = null;
            };
        }
    }, [isManual, playingIdx]);

    // When hover, set playingIdx and manual to true
    const handleMouseEnter = (idx: number) => {
        setIsManual(true);
        setPlayingIdx(idx);
    };

    // When mouse leaves, set manual mode to false and continue auto-play from this video
    const handleMouseLeave = () => {
        setIsManual(false);
    };

    return (
        <section ref={containerRef} id="CaseStudy" className="section overflow-hidden py-12 lg:py-24">
            <div className="max-w-[1360px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="heading flex justify-between items-center  text-left mb-14"
                >
                   <div className="max-w-[400px]">
                     <div className="flex gap-2 text-site mb-3 uppercase text-sm md:justify-start">
                        <SignatureIcon width={20} height={20} />
                        Featured
                    </div>
                    <h2 ref={fadeRef} className="mt-3 text-center md:text-left fade-up-stagger text-3xl lg:text-[46px] font-medium mb-1 leading-tight text-site">
                       Featured Off-Plan Properties
                    </h2>
                   </div>

                    <AnimatedButton href="" label="View More" className="w-fit transparent-btn2 mt-3" />

                </motion.div>
                <div className="grid md:grid-cols-3  gap-10">
                    {caseStudies.map((item, idx) => (
                        <div
                            className="case-col group  overflow-hidden  transition-shadow duration-200"
                            key={item.title}
                            onMouseEnter={() => handleMouseEnter(idx)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="w-full aspect-[1.2/1.5] rounded-xl relative overflow-hidden mb-4 flex justify-center items-center bg-gray-100">
                                {playingIdx === idx ? (
                                    <video
                                        ref={el => { videoRefs.current[idx] = el; }}

                                        src={item.video}
                                        width={800}
                                        height={1200}
                                        autoPlay
                                        muted
                                        loop={isManual}
                                        playsInline
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    <Image src={item.image} alt={item.title} width={800} height={1200} className="object-cover w-full h-full" />
                                )}
                            </div>
                            <div className="px-4">
                                <h5 className="text-2xl  mb-2">{item.title}</h5>
                                <p className="font-light max-w-[500px] text-lg">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
