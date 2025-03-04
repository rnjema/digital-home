import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Education() {
  const education = [
    {
      school: "University of Malawi",
      degree: "Bachelor of Science in Computer Science",
      year: "2018 - 2022",
      description: 
        "Graduated with distinction, specializing in software engineering, data structures, " +
        "and algorithm design. Developed strong problem-solving skills through coursework " +
        "in database systems, web technologies, and artificial intelligence."
    }
  ];

  return (
    <section id="education" className="container py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Education</h2>
          <p className="text-muted-foreground">
            My academic journey in computer science and software engineering.
          </p>
        </div>
        <div className="grid gap-6">
          {education.map((edu, index) => (
            <Card key={index} className="overflow-hidden border-2">
              <CardHeader className="space-y-1 bg-muted/50">
                <CardTitle className="text-2xl">{edu.school}</CardTitle>
                <p className="text-primary font-medium">{edu.degree}</p>
                <p className="text-sm text-muted-foreground">{edu.year}</p>
              </CardHeader>
              <CardContent className="mt-4">
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}