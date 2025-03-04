import Hero from "@/components/Hero";
import Education from "@/components/Education";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import AcademicExperience from "@/components/AcademicExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Education />
      <ProfessionalExperience />
      <AcademicExperience />
      <Skills />
      <Projects />
      <Contact />
    </motion.main>
  );
}