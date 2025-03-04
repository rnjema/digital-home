import { motion } from "framer-motion";
import { Progress } from "./ui/progress";

export default function Skills() {
  const skills = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 70 }
  ];

  return (
    <section id="skills" className="container py-12 md:py-20 bg-muted/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-8">Skills</h2>
        <div className="grid gap-6 max-w-2xl">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
