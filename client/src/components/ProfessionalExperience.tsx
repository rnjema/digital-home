import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function ProfessionalExperience() {
  const experiences = [
    {
      role: "Software Developer/Implementer (HISP UNIMA)",
      company: "University of Malawi",
      period: "May 2022 - Present",
      description: 
        "Support the development and implementation of a nationwide Communication Health Information System " +
        "aimed at integrated digitally-supported service delivery by community health workers. " +
        "Led the digitalization of a nationwide ITN mass campaign – a Malaria prevention initiative."
    },
    {
      role: "Medical Informatics Intern",
      company: "Partners in Health / Abwenzi Pa Za Umoyo",
      period: "August 2020 - October 2020",
      description: 
        "Worked closely with the M&E team in ensuring timely, complete, and high-quality COVID reporting, " +
        "which included fieldwork. Wrote and designed scripts for automated data retrieval from OpenMRS and " +
        "DHIS2 that significantly sped up custom report generation."
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