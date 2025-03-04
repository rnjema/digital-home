import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function AcademicExperience() {
  const experiences = [
    {
      role: "Staff Associate/Assistant Lecturer",
      institution: "University of Malawi",
      period: "June 2023 - Present",
      description: 
        "Teach and prepare assessments for undergraduate modules in Computer Networking and other " +
        "modules as assigned. Supervise undergraduate student projects and contribute to " +
        "departmental academic activities."
    },
    {
      role: "Part-Time Instructor",
      institution: "University of Malawi",
      period: "August 2022 - May 2023",
      description: 
        "Assisted in teaching modules such as machine learning, cryptography, and network programming. " +
        "Provided guidance and support to undergraduate students in their coursework and projects."
    }
  ];

  return (
    <section id="academic" className="container py-12 md:py-20 bg-muted/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8 max-w-4xl mx-auto"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Academic Experience</h2>
          <p className="text-muted-foreground">
            My contributions to academia through teaching and research.
          </p>
        </div>
        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden border-2">
              <CardHeader className="space-y-1 bg-muted/50">
                <CardTitle className="text-2xl">{exp.role}</CardTitle>
                <p className="text-primary font-medium">{exp.institution}</p>
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