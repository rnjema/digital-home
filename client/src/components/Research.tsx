import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Research() {
  return (
    <section id="research" className="container py-12 md:py-20 bg-muted/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8 max-w-4xl mx-auto"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Research</h2>
          <p className="text-muted-foreground">
            Academic publications, talks, and ongoing research projects.
          </p>
        </div>
        <Card className="text-center p-8">
          <CardContent>
            <p className="text-muted-foreground">Publications and research works will be featured here soon.</p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
