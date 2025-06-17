import { useState } from "react";
import { motion } from "framer-motion";

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const projects = [
    {
      title: "HM Clearance Tracker",
      description:
        "A Node.js app that monitors clearance items on the H&M Israel website. The system scrapes product data from specified category URLs and notifies users via Telegram when new items are added, helping users save time and money.",
      image: "🛍️",
      technologies: [
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

  const categories = ["All", "Backend"];

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
            A showcase of my work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
