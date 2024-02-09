import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section_divider";
import ScrollToTopButton from '@/components/ScrollToTop';
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import DarkMode from "@/components/dark-mode";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <ActiveSectionContextProvider>
      <Header />
      <main className="flex flex-col items-center px-4 pt-44 sm:pt-52">
        <ThemeContextProvider>
          <Intro />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Experience />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Contact />

          <ScrollToTopButton />
          <DarkMode />
        </ThemeContextProvider>
      </main>
      <Footer />
    </ActiveSectionContextProvider>
  )
}
