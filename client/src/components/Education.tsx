import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Education() {
  const education = [
    {
      school: "University of Malawi",
      degree: "Bachelor of Science in Computer Science",
      year: "2018 - 2022",
      description: "Graduated with honors, focusing on software engineering and data structures."
    }
  ];

  return (
    <section id="education" className="container py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-8">Education</h2>
        <div className="grid gap-6">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{edu.school}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">{edu.degree}</p>
                <p className="text-sm text-muted-foreground mt-1">{edu.year}</p>
                <p className="mt-4">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
