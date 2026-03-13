"use client";
import { useRef, useState, useEffect } from "react";
import { useStaggeredFadeUp } from "./useStaggeredFadeUp";
import { motion } from "framer-motion";
import SignatureIcon from "../components/SignatureIcon";
import Image from "next/image";
import AnimatedButton from "../components/AnimatedButton";


const caseStudies = [
    {
        title: "E-Book Store",
        description: "Built a mobile bookstore platform enabling fast online",
        image: "/img5.jpg",
        video: "/video.mp4",
    },
    {
        title: "QuickDocs",
        description: "Developed an on-demand doctor consultation app",
        image: "/img3.webp",
        video: "/video.mp4",
    },
    {
        title: "H2GO Water",
        description: "Launched an on-demand water delivery service",
        image: "/img4.jpg",
        video: "/video.mp4",
    },
    {
        title: "CargoTrack",
        description: "Created a GPS-powered logistics app",
        image: "/img1.png",
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
            <div className="max-w-[1250px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="heading flex justify-between items-center  text-left mb-14"
                >
                   <div className="max-w-[360px]">
                     <div className="flex gap-2 text-site mb-3 uppercase text-sm md:justify-start">
                        <SignatureIcon width={20} height={20} />
                        Case Study
                    </div>
                    <h2 ref={fadeRef} className="mt-3 text-center md:text-left fade-up-stagger text-3xl lg:text-[46px] font-medium mb-1 leading-tight text-site">
                        Let Our Portfolio Tell the Story
                    </h2>
                   </div>

                    <AnimatedButton href="" label="View Our Works" className="w-fit transparent-btn2 mt-3" />

                </motion.div>
                <div className="grid md:grid-cols-2  gap-10">
                    {caseStudies.map((item, idx) => (
                        <div
                            className="case-col group  overflow-hidden  transition-shadow duration-200"
                            key={item.title}
                            onMouseEnter={() => handleMouseEnter(idx)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="w-full aspect-[2/1.5] rounded-2xl relative overflow-hidden mb-4 flex justify-center items-center bg-gray-100">
                                {playingIdx === idx ? (
                                    <video
                                        ref={el => { videoRefs.current[idx] = el; }}

                                        src={item.video}
                                        width={800}
                                        height={800}
                                        autoPlay
                                        muted
                                        loop={isManual}
                                        playsInline
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    <Image src={item.image} alt={item.title} width={800} height={800} className="object-cover w-full h-full" />
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
