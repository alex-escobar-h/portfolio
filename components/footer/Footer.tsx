"use client";
import { useRef } from "react";

import { EXTERNAL_LINK_LIST } from "@/utils/data";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function Footer() {
  const [email, ...externalLinks] = EXTERNAL_LINK_LIST;
  const footerRef = useRef(null);

  useGSAP(
    () => {
      if (!footerRef.current) return;
      const title = SplitText.create(".contact-title", {
        type: "chars, lines",
        mask: "lines",
      });

      gsap.fromTo(
        title.chars,
        { y: 500 },
        {
          y: 0,
          ease: "sine",
          stagger: 0.1,
          duration: 1,
          scrollTrigger: {
            trigger: document.querySelector("#main"),
            start: "bottom center",
          },
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className='pt-section border-b-8 sm:border-b-[0.75rem] md:border-b-[1.5rem] lg:border-b-[2rem] bg-base-100 h-screen flex flex-col justify-end sticky bottom-0 left-0'
    >
      <div>
        <div>
          {/* Email ================ */}

          <div className='container mx-auto px-2 pt-16'>
            <div className='mb-4'>
              <h3 className=''>Feel free to reach out to me</h3>
              <a
                href={`mailto:${email.href}`}
                aria-label={`Send an email to ${email.href}`}
                className='flex items-center gap-2 text-lg w-fit text-base-content-100/70'
              >
                <span className='text-4xl font-extralight'>↳</span>
                <span className='underline underline-offset-2 font-light'>
                  {email.href}
                </span>
              </a>
            </div>
            {/* Email ================ */}

            {/* Links ================ */}
            <div>
              <h3>Find me at</h3>
              <ul>
                {externalLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-light text-base-content-100/75'
                    >
                      <span className='underline underline-offset-2'>
                        {link.title}
                      </span>
                      <span className='no-underline inline-block px-1'>↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Links ================ */}
          </div>
        </div>
        {/* Titles ================ */}
        <div className='text-center font-semibold overflow-hidden'>
          <h2
            className='contact-title overflow-hidden'
            style={{
              fontSize: "clamp(4rem, -0.9412rem + 22.5882vw, 16rem)",
              lineHeight: 1.125,
            }}
          >
            Contact
          </h2>
        </div>
        {/* Titles end ================ */}
      </div>
    </footer>
  );
}
