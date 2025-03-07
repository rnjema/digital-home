import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useAnimation, useInView } from "framer-motion";
import { useRef } from "react";


const fadeInUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

const staggerChildrenVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};


export default function Projects() {
  const projects = [
    {
      title: "Smart Home Automation System",
      description: "An IoT-based smart home automation system providing a platform for intelligent and efficient consumption of domestic utilities. Developed as part of a 2-person team for BSc final year project.",
      details: "Led the development of a Flutter mobile app-based user interface and integrated Firebase backend with Arduino microcontroller hosting different sensors.",
      tags: ["Flutter", "Firebase", "IoT", "Arduino", "Mobile Development"],
      github: "https://github.com/rnjema/smart-home-automation-project",
      demo: undefined
    }
  ];

  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  isInView && controls.start("visible");


  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-12 md:px-8 md:py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { 
              staggerChildren: 0.3 
            } 
          }
        }}
      >
        <motion.h2 
          className="mb-6 text-3xl font-bold md:mb-12 md:text-4xl"
          variants={fadeInUpVariant}
        >
          Projects
        </motion.h2>

        <motion.div 
          className="grid gap-8 md:grid-cols-2"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerChildrenVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1.0]
                  }
                }
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="overflow-hidden h-full border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm">{project.details}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                        whileHover={{ 
                          scale: 1.05, 
                          backgroundColor: "hsl(var(--primary)/0.2)" 
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <FiGithub className="h-4 w-4" />
                          Source
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      {project.demo && (<Button variant="outline" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <FiExternalLink className="h-4 w-4" />
                          Demo
                        </a>
                      </Button>)}
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}