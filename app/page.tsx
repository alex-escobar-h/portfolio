"use client";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/Hero";

import Navbar from "@/components/navbar/Navbar";
import Project from "@/components/project/Project";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='sticky top-0 left-0'>
        <Hero />
      </div>
      <div className='relative'>
        <main
          id='main'
          className='relative z-20 bg-base-100 pb-48'
        >
          <About />
          <Project />
        </main>
        <Footer />
        <span
          id='contact'
          className='scroll-mb-[100000000vh]'
        />
      </div>
    </>
  );
}
