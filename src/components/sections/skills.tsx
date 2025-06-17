import { Card, CardContent } from "@/components/ui/card";
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
      {/* Technical Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills as beautiful grid of badges */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="relative group/skill"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true, margin: "-20px" }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="bg-gradient-to-r from-purple-500/5 to-blue-600/5 border border-primary/20 rounded-lg p-3 text-center transition-all duration-300 group-hover/skill:shadow-md group-hover/skill:border-primary/40">
                        <span className="text-sm font-medium">{skill}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
