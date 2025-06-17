import { motion } from "framer-motion";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["C", "C++", "Python", "R", "JavaScript", "SQL", "Bash"],
    },
    {
      title: "Systems & Tools",
      icon: "🖥️",
      skills: ["Linux", "Docker", "Git", "HPC/Cluster Computing", "IPC"],
    },
    {
      title: "Concepts & Methodologies",
      icon: "📚",
      skills: [
        "Object-Oriented Programming",
        "Multithreading",
        "CI/CD",
        "Data Analysis",
      ],
    },
    {
      title: "Other",
      icon: "🌐",
      skills: [
        "Pandas",
        "PyTorch",
        "TensorFlow",
        "NumPy",
        "OpenCV",
        "HTML",
        "CSS",
        "React",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
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
            Skills & <span className="text-purple-500">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical proficiencies developed through academic research and
            industry experience
          </p>
        </motion.div>
      </div>
    </section>
  );
}
