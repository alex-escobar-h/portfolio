"use client";
import { useRef } from "react";

import { Showcase } from "@/utils/types";
import { formatID } from "@/utils/utilFunctions";
import { Accent } from "../Accent";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function ShowcaseItem({
  id,
  title,
  stack,
  repo,
  demo,
  overview,
}: Showcase) {
  const normalizedStack = Array.isArray(stack) ? stack : [stack];
  const links = [
    { label: "Repo", url: repo },
    demo ? { label: "Demo", url: demo } : null,
  ].filter((l) => l !== null);

  const showcaseRef = useRef(null);

  useGSAP(
    () => {
      if (!showcaseRef.current) return;
      const overview = SplitText.create(".sc-overview", {
        type: "lines",
        mask: "lines",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: showcaseRef.current,
          start: "top 90%",
        },
        defaults: {
          ease: "power2.out",
          duration: 0.6,
        },
      });
      tl.fromTo(
        ".sc-divider",
        { scaleX: 0 },
        { scaleX: 1, transformOrigin: "left" }
      )
        .fromTo(".sc-id", { opacity: 0, y: 15 }, { opacity: 1, y: 0 })
        .fromTo(
          [".sc-title", ".sc-subtitle"],
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0 },
          "<0.1"
        )
        .fromTo(
          ".sc-list-item",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, stagger: 0.05 },
          "<0.2"
        )
        .fromTo(
          overview.lines,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, stagger: 0.04 },
          "<0.2"
        );
    },
    { scope: showcaseRef }
  );

  return (
    <article
      className='grid grid-cols-12 gap-2 md:gap-4'
      ref={showcaseRef}
    >
      {/* IDX start ======================= */}
      <Accent className='sc-id text-start font-mono font-light'>
        ({formatID(id)})
      </Accent>

      {/* IDX end ========================= */}

      {/* CONTENT container =============== */}
      <div className='col-start-1 row-start-2 col-span-full grid grid-cols-11 gap-4 md:col-start-2 '>
        {/* Header start ======================= */}
        <header className='sc-header col-span-full overflow-hidden'>
          <h3 className='sc-title'>{title}</h3>
          <hr className='sc-divider bg-base-content-100/80' />
        </header>
        {/* Header end ========================= */}

        {/* Overview start ======================= */}
        <div className='col-span-full md:col-span-6 md:row-span-4 overflow-hidden'>
          <h4 className='sc-subtitle text-base-content-100/90 font-medium '>
            Overview:
          </h4>
          <p className='sc-overview text-sm md:max-w-[45ch] text-base-content-100/60'>
            {overview}
          </p>
        </div>
        {/* Overview end ========================= */}

        {/* Stack start ========================= */}
        <div className='row-start-4 col-start-5 col-span-6 md:row-start-2 md:col-start-9'>
          <h4 className='sc-subtitle text-base-content-100/90 font-medium pb-1'>
            Tech Stack:
          </h4>
          <ul className='flex gap-2 flex-wrap overflow-hidden'>
            {/* TODO: BG color */}
            {normalizedStack.map((stk, idx) => (
              <Accent
                key={idx}
                as='li'
                className='sc-list-item text-sm px-1 py-0.5 rounded-xs font-medium text-base-content-100/80'
                variant='background'
              >
                {stk}
              </Accent>
            ))}
          </ul>
        </div>
        {/* Stack end ========================= */}

        {/* Preview start ======================= */}
        <div className='row-start-4 col-start-1 col-span-3 md:row-start-4 md:col-start-9 md:col-span-3'>
          <h4 className='sc-subtitle text-base-content-100/90 '>Preview:</h4>
          <ul className='flex gap-x-2 overflow-hidden'>
            {links.map((link, idx) => (
              <li
                key={idx}
                className='sc-list-item'
              >
                <a
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-base-content-100/75'
                >
                  <span className='underline underline-offset-2'>
                    {link.label}
                  </span>
                  <span className='no-underline inline-block px-0.5'>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Preview end ========================= */}
      </div>
      {/* CONTENT container =============== */}
    </article>
  );
}
