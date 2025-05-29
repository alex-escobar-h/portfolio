import { EXTERNAL_LINK_LIST } from "@/utils/data";
import React from "react";

export default function Footer() {
  const [email, ...externalLinks] = EXTERNAL_LINK_LIST;
  return (
    <section
      id='contact'
      className='pt-section'
    >
      {/* Email ================ */}
      <hr />
      <div className='container mx-auto px-2 pt-16'>
        <div className='mb-4'>
          <h3 className=''>Feel free to reach out to me</h3>
          <a
            href={`mailto:${email.href}`}
            aria-label={`Send an email to ${email.href}`}
            className='flex items-center gap-2 text-xl w-fit text-base-content-100/70'
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
          <h3 className=''>Find me at</h3>
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
                  <span className='no-underline inline-block px-0.5'>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Links ================ */}
      </div>

      {/* Titles ================ */}
      <div className='text-center font-semibold overflow-hidden'>
        <h2 style={{ fontSize: "clamp(4rem, -0.9412rem + 22.5882vw, 16rem)" }}>
          Contact
        </h2>
      </div>
      {/* Titles ================ */}
    </section>
  );
}
