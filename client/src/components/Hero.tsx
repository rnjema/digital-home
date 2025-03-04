import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { FiDownload, FiMail } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="container flex min-h-screen items-center justify-center py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <div className="mb-8 overflow-hidden rounded-full border-4 border-primary/20 p-2">
          <div className="h-32 w-32 rounded-full bg-primary/20" />
        </div>
        <h1 className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
          Ramsey Njema
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
          Computer Science graduate from the University of Malawi, passionate about building
          innovative solutions and creating impactful technology. Specializing in software
          engineering and data structures.
        </p>
        <div className="mt-8 flex gap-4">
          <Button size="lg" asChild>
            <a href="#contact" className="flex items-center gap-2">
              <FiMail className="h-5 w-5" />
              Get in Touch
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="/Ramsey-Njema-Resume.pdf"
              download
              className="flex items-center gap-2"
            >
              <FiDownload className="h-5 w-5" />
              Download CV
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}