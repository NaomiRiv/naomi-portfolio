import { Button } from "@/components/ui/button";
import { Mail, Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-8 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Naomi
                </span>
              </motion.h1>

              <motion.p
                className="text-xl sm:text-2xl text-muted-foreground max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                CS Graduate from Technion. Passionate about{" "}
                <span className="text-purple-500 font-semibold">building</span>,{" "}
                <span className="text-blue-600 font-semibold">learning</span>,
                and{" "}
                <span className="text-purple-600 font-semibold">
                  solving hard problems
                </span>{" "}
                with code.
              </motion.p>
              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-muted-foreground leading-relaxed">
                  I'm a Computer Science graduate from the Technion with
                  experience in data-driven projects, algorithm development, and
                  low-level systems work in both academia and industry.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about solving complex, multidisciplinary
                  problems.
                </p>
              </motion.p>
            </div>

            <motion.div
              className="flex flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button
                onClick={() => scrollToSection("#projects")}
                variant="outline"
                size="lg"
                className="group"
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                size="lg"
                className="group"
              >
                Let's Connect
                <Mail className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="p-3 hover:scale-110"
                asChild
              >
                <a
                  href="./resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
                  <span className="ml-2">Resume</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
          {/* Profile Image */}
          <motion.div
            className="flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 via-blue-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden"
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center overflow-hidden">
                  <img
                    src="image.png"
                    alt="Naomi Rivkin"
                    className="w-64 h-64 rounded-full object-cover object-center"
                  />
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-600 rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute top-1/4 -left-8 w-4 h-4 bg-purple-600 rounded-full"
                animate={{ x: [0, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
