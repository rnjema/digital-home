import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { SiX } from "react-icons/si";
import { useState } from "react";

export default function Hero() {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortBio = "A self-driven and budding academic researcher who has been actively involved in developing high-impact digital initiatives using the DHIS2 platform. He has significantly contributed to developing and operationalizing iCHIS, a digitalized nationwide community health services solution, and NAMIS...";

  const fullBio = "A self-driven and budding academic researcher who has been actively involved in developing high-impact digital initiatives using the DHIS2 platform. He has significantly contributed to developing and operationalizing iCHIS, a digitalized nationwide community health services solution, and NAMIS, the national agricultural management information system. In addition to his passion for digital transformation initiatives, Ramsey's research interests lie at the intersection of digital security, AI, and edge computing. Currently, he serves as a staff associate in the Department of Computing at the University of Malawi – where he has been actively involved in teaching, outreach activities, and software development. He firmly believes in community-driven digital transformation, as evidenced by his engagement with Zindi in his role as country ambassador, where he seeks to democratize the knowledge of AI. In addition, Ramsey is an avid enthusiast of emerging technologies such as blockchain, IoT, quantum computing, and GenAI, just to name a few.";

  return (
    <section className="container flex min-h-screen items-center justify-center py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <div className="mb-8 overflow-hidden rounded-full border-4 border-primary/20 p-2">
          <img 
            src="/avatar.jpg" 
            alt="Ramsey Njema"
            className="h-32 w-32 rounded-full object-cover"
          />
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
        <div className="mt-6">
          <p className="max-w-3xl text-xl text-muted-foreground leading-relaxed">
            {isExpanded ? fullBio : shortBio}
          </p>
          <Button
            variant="ghost"
            size="sm"
            className="mt-2"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <FiChevronUp className="h-4 w-4 mr-1" />
            ) : (
              <FiChevronDown className="h-4 w-4 mr-1" />
            )}
            {isExpanded ? "Show Less" : "Read More"}
          </Button>
        </div>
        <div className="mt-8">
          <Button size="lg" variant="outline" asChild>
            <a
            href="/Ramsey-Njema-Resume.pdf"
              download
              className="flex items-center gap-2"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 5 }}
              >
                <FiDownload className="h-5 w-5" />
              </motion.div>
              Download CV
            </a>
          </Button>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 1.2,
              ease: [0, 0.71, 0.2, 1.01] 
            }}
            className="absolute -bottom-12 -left-12 h-24 w-24 rounded-full bg-primary/30 blur-2xl md:h-32 md:w-32"
            aria-hidden="true"
          />
        </div>
      </motion.div>
    </section>
  );
}