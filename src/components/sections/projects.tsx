import { useState } from "react";

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

  return <section id="projects">projects</section>;
}
