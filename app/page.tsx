import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/Hero";
import Project from "@/components/project/Project";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Project />
      <Footer />
    </div>
  );
}
