import Home from "@/components/home/Home";
import About from "./about/page";
import SectionDivider from "@/components/elements/SectionDivider";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";




export default function page() {
  return (
    <>
      <Home />
      <SectionDivider/>
      <About />
      <SectionDivider/>
      <Projects/>
      <SectionDivider/>
      <Experience/>
     
    </>
  )
}
