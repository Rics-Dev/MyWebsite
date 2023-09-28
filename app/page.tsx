import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section_divider";
import ScrollToTopButton from '@/components/ScrollToTop';
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 ">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <ScrollToTopButton />
    </main>
  )
}
