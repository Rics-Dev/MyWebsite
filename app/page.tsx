import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section_divider";
import ScrollToTopButton from '@/components/ScrollToTop';
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import DarkMode from "@/components/dark-mode";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 ">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Contact />
      
      <ScrollToTopButton />
      <DarkMode />
    </main>
  )
}
