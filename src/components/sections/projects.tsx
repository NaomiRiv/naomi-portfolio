import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Filter, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "A modern, responsive personal portfolio website showcasing my projects, skills, and experience. Built with React and styled using Tailwind CSS, the site includes a fully automated CI/CD pipeline using GitHub Actions, which deploys updates to AWS S3 and CloudFront on every push to main or dev branches.",
      image: "🌐",
      technologies: [
        "TypeScript",
        "React",
        "Tailwind CSS",
        "shadcn/ui",
        "Framer Motion",
        "Vite",
        "CI/CD",
        "AWS",
        "GitHub Actions",
      ],
      category: "Frontend",
      date: "June 2025",
      github: "https://github.com/NaomiRiv/naomi-portfolio",
      demo: "https://naomirivkin.dev",
      features: [
        "Fully responsive design",
        "Built with modern React + Vite stack",
        "Fully deployed to AWS (S3, CloudFront, Route 53)",
        "Automated CI/CD with GitHub Actions",
        "Separate dev/prod pipelines triggered by branch",
      ],
    },
    {
      title: "HM Clearance Tracker",
      description:
        "A Node.js app that monitors clearance items on the H&M Israel website. The system scrapes product data from specified category URLs and notifies users via Telegram when new items are added, helping users save time and money.",
      image: "🛍️",
      technologies: [
        "JavaScript",
        "Node.js",
        "Cheerio",
        "SQLite",
        "Telegraf",
        "Pino Logger",
        "Docker",
        "Web Scraping",
      ],
      category: "Backend",
      date: "Apr 2025",
      github: "https://github.com/NaomiRiv/hm-clearance-tracker",
      demo: "https://t.me/hm_clearance",
      features: [
        "Scrapes clearance product data from H&M Israel",
        "Saves items to a local SQLite database",
        "Telegram bot for real-time deal alerts",
        "Docker-compatible for easy deployment",
        "Simple logging for tracking activity",
      ],
    },
  ];

  const categories = ["All", "Frontend", "Backend"];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-purple-500">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my work
          </p>
        </motion.div>
        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedFilter(category)}
              variant={selectedFilter === category ? "default" : "outline"}
              className="group"
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </motion.div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                layout
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="text-4xl mb-4 text-center">
                      {project.image}
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{project.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.date}
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-md text-purple-100"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button size="sm" className="flex-1 group" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 group"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
