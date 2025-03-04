import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="container pt-24 pb-12 md:pt-32 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Hi, I'm Ramsey Njema
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
          A passionate software engineer focused on building innovative solutions
          and creating impactful technology.
        </p>
        <div className="mt-8 flex gap-4">
          <Button size="lg" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button size="lg" variant="outline">
            <FiDownload className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
