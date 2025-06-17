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
        </div>
      </div>
    </section>
  );
}
