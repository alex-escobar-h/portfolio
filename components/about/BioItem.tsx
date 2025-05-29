"use client";
import type { Bio } from "@/utils/types";
import { formatID } from "@/utils/utilFunctions";
import { Accent } from "../Accent";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function BioItem({ id, title, content }: Bio) {
  const bioRef = useRef(null);

  useGSAP(
    () => {
      if (!bioRef.current) return;
      const content = SplitText.create(".bio-content", {
        type: "lines",
        mask: "lines",
      });
      console.log(content);
      const tl = gsap.timeline({
        scrollTrigger: { trigger: bioRef.current, start: "top 90%" },
      });
      tl.fromTo(
        ".bio-divider",
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          transformOrigin: "left",
          ease: "power2.out",
        }
      )
        .fromTo(
          content.lines,
          {
            opacity: 0,
            y: 25,
          },
          { opacity: 0.8, y: 0, stagger: 0.1, ease: "power2.out" }
        )
        .fromTo(
          ".bio-header",
          {
            opacity: 0,
            y: 20,
          },
          { opacity: 0.8, y: 0, ease: "power2.out" },
          "<"
        );
    },
    { scope: bioRef }
  );
  return (
    <article
      ref={bioRef}
      className='flex flex-col gap-4 md:grid md:grid-cols-12'
    >
      {/* HR Start ----------------------- */}
      <hr className='bio-divider md:col-span-full opacity-30 ' />
      {/* HR End ------------------------- */}

      {/* Header Start ------------------- */}
      <header className='bio-header flex gap-4 md:gap-0 md:grid md:grid-cols-subgrid md:row-start-2 md:col-start-1 md:col-span-3 overflow-hidden'>
        <Accent className='bio-id text-start font-mono font-light md:col-start-1 md:col-span-1 '>
          ({formatID(id)})
        </Accent>

        <h3 className='bio-title md:grid md:col-start-2 md:col-span-4 md:row-start-1'>
          {title}
        </h3>
      </header>
      {/* Header End --------------------- */}

      {/* Content Start ------------------ */}
      <div className='md:col-start-7 md:col-span-6 lg:col-start-9 lg:col-span-4'>
        <p className='bio-content text-sm md:max-w-[45ch] text-base-content-100/60'>
          {content}
        </p>
      </div>
      {/* Content End -------------------- */}
    </article>
  );
}
