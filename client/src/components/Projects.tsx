import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      title: "Smart Home Automation System",
      description: "An IoT-based smart home automation system providing a platform for intelligent and efficient consumption of domestic utilities. Developed as part of a 2-person team for BSc final year project.",
      details: "Led the development of a Flutter mobile app-based user interface and integrated Firebase backend with Arduino microcontroller hosting different sensors.",
      tags: ["Flutter", "Firebase", "IoT", "Arduino", "Mobile Development"],
      github: "https://github.com/rnjema/smart-home-automation-project",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="container py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8 max-w-4xl mx-auto"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground">
            Showcasing my work and technical implementations.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 place-items-center">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">{project.details}</p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-primary/10 rounded-md text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 justify-center">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FiGithub className="mr-2" /> Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink className="mr-2" /> Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}