import Hero from "@/components/Hero";
import Education from "@/components/Education";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import AcademicExperience from "@/components/AcademicExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Blog from "@/components/Blog";
import CommunityEngagement from "@/components/CommunityEngagement";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { FloatingParticles } from "@/components/FloatingParticles";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <ScrollProgressBar />
      <FloatingParticles />
      <Hero />
      <Education />
      <ProfessionalExperience />
      <AcademicExperience />
      <Skills />
      <Projects />
      <Research />
      <Blog />
      <CommunityEngagement />
      <Contact />
    </motion.main>
  );
}