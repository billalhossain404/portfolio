import { Navbar } from "../components/sections/navbar";
import { Hero } from "../components/sections/hero";
import { About } from "../components/sections/about";
import { Skills } from "../components/sections/skills";
import { Projects } from "../components/sections/projects";
import { Journey } from "../components/sections/journey";
import { Contact } from "../components/sections/contact";
import { Footer } from "../components/sections/footer";

export default function Home() {
  return (
    <main
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#08090b] text-zinc-100 selection:bg-lime-300 selection:text-black"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-48 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-lime-300/[0.08] blur-[120px]" />
        <div className="absolute top-[45rem] -left-40 h-80 w-80 rounded-full bg-emerald-400/[0.06] blur-[100px]" />
        <div className="absolute right-0 top-[85rem] h-96 w-96 rounded-full bg-sky-400/[0.05] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
