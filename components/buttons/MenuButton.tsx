"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "../menu/MobileMenu";

gsap.registerPlugin(useGSAP);

export default function MenuButton() {
  const menuBtnRef = useRef(null);
  const [clicked, setClicked] = useState(false);
  const tlRef = useRef<GSAPTimeline>(null);

  const toggleMenuButton = () => {
    setClicked((prev) => !prev);
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true });
      tl.to(".line-1", {
        y: 4,
        duration: 0.2,
      })
        .to(
          ".line-2",
          {
            y: -4,
            duration: 0.2,
          },
          "<"
        )
        .to(".line-1", {
          rotate: 45,
          transformOrigin: "center",
          duration: 0.2,
          delay: 0.05,
        })
        .to(
          ".line-2",
          { rotate: -45, transformOrigin: "center", duration: 0.2 },
          "<"
        );

      tlRef.current = tl;
    },
    { scope: menuBtnRef }
  );

  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;

    if (clicked) {
      tl.play();
    } else {
      tl.reverse();
    }
  }, [clicked]);

  return (
    <>
      <button
        ref={menuBtnRef}
        className='w-6 h-2 relative cursor-pointer z-10 block sm:hidden'
        onClick={toggleMenuButton}
      >
        <div className='line line-1 w-full h-px bg-base-content-100 absolute top-0' />
        <div className='line line-2 w-full h-px bg-base-content-100 absolute top-full' />
      </button>
      {clicked && (
        <MobileMenu
          handleNavClick={() => {
            setClicked(false);
          }}
        />
      )}
    </>
  );
}
