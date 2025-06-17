import { motion } from "framer-motion";

export function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Research Assistant (MSc Student)",
      company: "The Cancer Evolution Lab - Technion",
      location: "Israel",
      period: "Oct 2023 - Oct 2024",
      description:
        "Led analysis of whole genome and single-cell sequencing data using Python-based bioinformatics pipelines to investigate cancer evolution patterns.",
      achievements: [
        "Developed and executed high-performance computing workflows on cluster infrastructure",
        "Processed large-scale genomic datasets for cancer research",
        "Implemented bioinformatics analysis pipelines",
      ],
      technologies: [
        "Python",
        "Bioinformatics",
        "HPC",
        "Genomics",
        "Data Analysis",
      ],
    },
    {
      type: "work",
      title: "Research Assistant (Student)",
      company: "Bioinformatic Knowledge Unit - Technion R&D Foundation",
      location: "Israel",
      period: "Jul 2021 - Jul 2022",
      description:
        "Specialized in protein-protein interaction analysis and workflow automation.",
      achievements: [
        "Automated pyDock workflow for protein interaction analysis",
        "Developed statistical analysis tools for PPI data",
        "Enhanced research efficiency through automation",
      ],
      technologies: ["Python", "PyDock", "Statistical Analysis", "Automation"],
    },
    {
      type: "education",
      title: "BSc in Computer Science",
      company: "Technion - Israel Institute of Technology",
      location: "Israel",
      period: "Oct 2017 - Mar 2022",
      description:
        "Bachelor degree in Computer Science with academic excellence.",
      achievements: [
        "GPA: 86.5",
        "Scholarship for academic excellence from DELL EMC (2018)",
        "Strong foundation in algorithms and software engineering",
        "Final project: CNN model for atrial fibrillation prediction",
      ],
      technologies: [
        "Computer Science",
        "Algorithms",
        "Software Engineering",
        "ML",
      ],
    },
    {
      type: "work",
      title: "Software Engineer (Student)",
      company: "Intel",
      location: "Israel",
      period: "Jun 2018 - Jun 2020",
      description: "Maintained and optimized driver APIs and internal tools.",
      achievements: [
        "Maintained and optimized driver APIs for Intel wireless devices using C++",
        "Designed and implemented user interfaces for internal QA and debugging tools using Angular",
      ],
      technologies: ["C", "C++", "CI/CD", "Agile", "Angular"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Experience & <span className="text-purple-500">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A timeline of my professional journey and academic achievements
          </p>
        </motion.div>
      </div>
      experience
    </section>
  );
}
