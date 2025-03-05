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
        <motion.h2 
          className="text-3xl font-bold tracking-tight"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>
        <p className="text-muted-foreground">
          My journey in professional software development.
        </p>
        <motion.div 
          className="grid gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { duration: 0.6, staggerChildren: 0.2 } 
            }
          }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
              }}
              whileHover={{ 
                scale: 1.02, 
                transition: { duration: 0.2 } 
              }}
              className="overflow-hidden border-2"
            >
              <Card >
                <CardHeader className="space-y-1 bg-muted/50">
                  <CardTitle className="text-2xl">{exp.role}</CardTitle>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </CardHeader>
                <CardContent className="mt-4">
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}