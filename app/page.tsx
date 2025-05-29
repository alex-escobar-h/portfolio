import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/Hero";

import Navbar from "@/components/navbar/Navbar";
import Project from "@/components/project/Project";

export default function Home() {
  return (
    <>
      {/* <HueInitializer /> */}
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Footer />
    </>
  );
}
