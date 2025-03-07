import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function CommunityEngagement() {
  const engagements = [
    {
      role: "Expert Facilitator/Trainer",
      organization: "DHIS2 Tracker Configuration Academy Malawi",
      period: "November 2024",
      type: ["Training & Education"]
    },
    {
      role: "Country Ambassador",
      organization: "Zindi Africa Malawi",
      period: "December 2024 - Present",
      description: "Previously served as Community Ambassador from September 2022 to November 2024. Currently serving as Country Ambassador for Malawi.",
      type: ["Leadership"]
    },
    {
      role: "Remote Pilot License Training",
      organization: "African Drone and Data Academy, MUST",
      period: "January - February 2024",
      type: ["Certification"]
    },
    {
      role: "Ambassador",
      organization: "AMLD Africa, EPFL Switzerland",
      period: "September - December 2022",
      type: ["Leadership"]
    },
    {
      role: "Participant",
      organization: "Data Science Africa, IAA Tanzania",
      period: "July 2022",
      type: ["Professional Development"]
    },
    {
      role: "University Organizer & Participant",
      organization: "Zindi UmojaHack Africa",
      period: "March 2022",
      description: "Africa's top Inter-University ML Hackathon at University of Malawi",
      type: ["Event Organization"]
    },
    {
      role: "Founding Member",
      organization: "Python Coding Club, University of Malawi",
      period: "January 2022 - Present",
      type: ["Leadership","Student Organization"]
    },
    {
      role: "Member",
      organization: "Electronics Student Society, University of Malawi",
      period: "2019 - April 2022",
      type: ["Student Organization"]
    },
    {
      role: "Member",
      organization: "Computer Science Student Society, University of Malawi",
      period: "August 2017 - April 2022",
      type: ["Student Organization"]
    }
  ];

  return (
    <section id="community" className="container py-12 md:py-20 bg-muted/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8 max-w-4xl mx-auto"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Community Engagement and Interests</h2>
          <p className="text-muted-foreground">
            Leadership roles and contributions to the tech community.
          </p>
        </div>
        <div className="grid gap-6">
          {engagements.map((engagement, index) => (
            <Card key={index} className="overflow-hidden border-2">
              <CardHeader className="space-y-1 bg-muted/50">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{engagement.role}</CardTitle>
                    <p className="text-primary font-medium">{engagement.organization}</p>
                  </div>
                  <div className="flex space-x-2">
                  {engagement.type && engagement.type.map((type, index) => (<span className="text-sm text-muted-foreground px-2 py-1 bg-primary/10 rounded-full" key={index}>
                    {type}
                  </span>))}
                  </div>                  
                </div>
                <p className="text-sm text-muted-foreground">{engagement.period}</p>
              </CardHeader>
              {engagement.description && (
                <CardContent className="mt-2">
                  <p className="text-sm text-muted-foreground">{engagement.description}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
