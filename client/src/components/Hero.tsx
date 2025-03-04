import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { FiDownload, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiX } from "react-icons/si";

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
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <a 
              href="https://github.com/RamseyNjema" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FiGithub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a 
              href="https://linkedin.com/in/ramsey-njema" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FiLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a 
              href="https://twitter.com/RamseyNjema" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <SiX className="h-4 w-4" />
              <span className="sr-only">X (Twitter)</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a 
              href="mailto:ramseynjema@gmail.com"
              className="hover:text-primary"
            >
              <FiMail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
        <h1 className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
          Ramsey Njema
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-muted-foreground leading-relaxed">
          A self-driven and budding academic researcher who has been actively involved in developing high-impact digital initiatives using the DHIS2 platform. He has significantly contributed to developing and operationalizing iCHIS, a digitalized nationwide community health services solution, and NAMIS, the national agricultural management information system. In addition to his passion for digital transformation initiatives, Ramsey's research interests lie at the intersection of digital security, AI, and edge computing. Currently, he serves as a staff associate in the Department of Computing at the University of Malawi – where he has been actively involved in teaching, outreach activities, and software development. He firmly believes in community-driven digital transformation, as evidenced by his engagement with Zindi in his role as country ambassador, where he seeks to democratize the knowledge of AI. In addition, Ramsey is an avid enthusiast of emerging technologies such as blockchain, IoT, quantum computing, and GenAI, just to name a few.
        </p>
        <div className="mt-8">
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