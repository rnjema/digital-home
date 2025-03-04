import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function ProfessionalExperience() {
  const experiences = [
    {
      role: "Software Engineering Intern",
      company: "Malawi Revenue Authority",
      period: "June 2021 - August 2021",
      description: 
        "Developed and maintained web applications using modern JavaScript frameworks " +
        "and contributed to the optimization of database queries for improved performance."
    }
  ];

  return (
    <section id="experience" className="container py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8 max-w-4xl mx-auto"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Professional Experience</h2>
          <p className="text-muted-foreground">
            My journey in professional software development.
          </p>
        </div>
        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden border-2">
              <CardHeader className="space-y-1 bg-muted/50">
                <CardTitle className="text-2xl">{exp.role}</CardTitle>
                <p className="text-primary font-medium">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </CardHeader>
              <CardContent className="mt-4">
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
