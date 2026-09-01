import { About } from "@/components/sections/About";
import { Architecture } from "@/components/sections/Architecture";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Architecture />
      <Education />
      <GitHubSection />
      <Contact />
    </>
  );
}
