import { motion } from "framer-motion";
import { Progress } from "./ui/progress";

export default function Skills() {
  const skills = [
    { name: "Mobile & Web Development", level: 90, technologies: "Flutter, JavaScript, ReactJS, PHP Laravel" },
    { name: "Databases", level: 85, technologies: "SQL, NoSQL" },
    { name: "Data Science & Machine Learning", level: 80, technologies: "Python, PyTorch" },
    { name: "Network Systems Administration", level: 75, technologies: "UNIX" },
    { name: "Network Programming", level: 70, technologies: "Python, C" }
  ];

  return (
    <section id="skills" className="container py-12 md:py-20 bg-muted/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8 max-w-4xl mx-auto"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
          <p className="text-muted-foreground">
            Technical proficiencies and expertise.
          </p>
        </div>
        <div className="grid gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-between mb-2 max-w-lg mx-auto">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2 max-w-lg mx-auto" />
              <p className="text-sm text-muted-foreground mt-2">
                {skill.technologies}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}