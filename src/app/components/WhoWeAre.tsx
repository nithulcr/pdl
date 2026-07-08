"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SignatureIcon from "../components/SignatureIcon";

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !pinRef.current || !headingRef.current) return;

    const ctx = gsap.context(() => {
      const line = headingRef.current!.querySelector<HTMLElement>(
        ".filling-line-fill"
      );
      if (!line) return;

      gsap.set(line, { "--size-blend": "0%" });

      const tl = gsap.timeline();
      tl.to(line, {
        "--size-blend": "100%",
        duration: 1,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        pin: pinRef.current,     // pin inner wrapper
        start: "top top",        // pin when section hits top
        end: "+=200%",
        scrub: true,
        anticipatePin: 1,
        animation: tl,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="WhoWeAre"
      ref={sectionRef}
      className="py-12 lg:py-24 relative bg-[var(--background2)]"
    >
      {/* pinned wrapper with 80px top padding */}
      <div ref={pinRef} className="pt-20">
        <div className="max-w-[1360px] mx-auto px-4 md:px-6">
          <div className="heading flex flex-col items-center max-w-[900px] mx-auto mb-10">
            <div className="flex items-center gap-2 text-site  uppercase text-sm">
              <SignatureIcon width={20} height={20} />
             About host on pdl
            </div>

            <h2
              ref={headingRef}
              className="text-center text-[27px] text-3xl lg:text-[48px] font-light mt-6 leading-tight relative"
            >
              <span className="relative block">
                <span className="filling-line-fill">
Host On PDL began as a technology studio and grew into something rarer: a firm trusted equally by enterprise clients who need software that performs, and by investors who need a partner that understands the UAE property market from the inside.
                </span>
                <span
                  className="filling-line-base"
                  aria-hidden="true"
                >
Host On PDL began as a technology studio and grew into something rarer: a firm trusted equally by enterprise clients who need software that performs, and by investors who need a partner that understands the UAE property market from the inside.
                </span>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
