import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Education() {
  const education = [
    {
      school: "University of Malawi",
      degree: "Bachelor of Science in Computer Network Engineering",
      year: "2017 - 2022",
      description: 
        "Specializing in computer science, networking and electronics. Developed strong problem-solving skills through coursework " +
        "in Internet applications development, systems and network adminstration and security, and artificial intelligence.",
      awards: [
        "Dean's List Award (2x) for outstanding academic performance"
      ]
    }
  ];

  return (
    <section id="education" className="container py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8 max-w-4xl mx-auto"
      >
        <div className="space-y-4 text-center">
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
              <CardContent className="mt-4 space-y-4">
                <p className="text-muted-foreground">{edu.description}</p>
                {edu.awards && (
                  <div className="pt-2">
                    <p className="font-medium text-primary">Awards & Achievements</p>
                    <ul className="list-disc list-inside text-muted-foreground pl-4 mt-2">
                      {edu.awards.map((award, i) => (
                        <li key={i}>{award}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}