"use client";
import { useRef } from "react";

import { NAV_LIST, EXTERNAL_LINK_LIST } from "@/utils/data";
import { formatID } from "@/utils/utilFunctions";
import { Accent } from "../Accent";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

type MobileMenuProps = {
  handleNavClick: () => void;
};
export default function MobileMenu({ handleNavClick }: MobileMenuProps) {
  const [_, ...externalList] = EXTERNAL_LINK_LIST;
  const updatedNavlist = [{ id: 4, title: "Home" }, ...NAV_LIST];
  const mobileMenuRef = useRef(null);

  useGSAP(
    () => {
      if (!mobileMenuRef.current) return;

      const tl = gsap.timeline();
      tl.fromTo(
        ".mm-divider",
        { scaleX: 0 },
        {
          delay: 0.1,
          scaleX: 1,
          transformOrigin: "left",
          ease: "power1.inOut",
          duration: 1,
        }
      )
        .fromTo(
          ".mm-link-id",
          { opacity: 0, y: 20, scale: 0.7 },
          { opacity: 1, y: 0, stagger: 0.1, scale: 1 }
        )
        .fromTo(
          ".mm-link-title",
          { opacity: 0, y: -20, scale: 0.7 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.1 },
          "<"
        )
        .fromTo(
          ".mm-external-link",
          { opacity: 0, y: 20, scale: 0.7 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.1 },
          "<"
        );
    },
    { scope: mobileMenuRef }
  );

  return (
    <div
      className='fixed inset-0 bg-base-200 -z-0  sm:hidden'
      ref={mobileMenuRef}
    >
      <Accent
        className='mm-navigate -rotate-90 w-5 mx-auto absolute right-6 top-2/3 -translate-y-1/2 text-6xl font-bold uppercase opacity-55'
        as={"div"}
      >
        Navigate
      </Accent>
      <div className='mx-auto px-4 max-w-md pt-20 pb-16 flex flex-col justify-between size-full pr-16'>
        {/* Page navigation */}
        <ul className='space-y-4'>
          {updatedNavlist.map((nav, idx) => (
            <li
              key={`${nav.id}${nav.title}`}
              className='overflow-hidden'
            >
              <a
                href={`#${nav.title.toLowerCase()}`}
                className='flex items-end gap-8'
                onClick={handleNavClick}
              >
                <Accent className='mm-link-id text-start font-mono'>
                  ({formatID(idx + 1)})
                </Accent>

                <div className='mm-link-title text-4xl font-bold capitalize transition-colors hover:text-base-content-100/80'>
                  {nav.title}
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className='space-y-4'>
          <hr className='mm-divider' />
          {/* my links */}
          <ul className='space-y-2'>
            {externalList.map((link) => (
              <li
                key={`${link.id}${link.title}`}
                className='overflow-hidden block'
              >
                <a
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mm-external-link space-x-2 inline-block transition-colors hover:text-base-content-100/80'
                >
                  <span>{link.title}</span>
                  <span>↗</span>
                </a>
              </li>
            ))}
          </ul>
          <hr className='mm-divider' />
        </div>
      </div>
    </div>
  );
}
