import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";
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
        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border" />

          {/* Timeline Line - Mobile */}
          <div className="md:hidden absolute left-8 h-full w-0.5 bg-border" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-30px" }}
              >
                {/* Mobile Layout */}
                <div className="flex md:hidden w-full">
                  {/* Timeline Node - Mobile */}
                  <div className="relative flex items-center justify-center mt-4 mr-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 flex-shrink-0">
                    <div className="w-2 h-2 bg-background rounded-full" />
                  </div>

                  <div className="flex-1">
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          {exp.type === "work" ? (
                            <Briefcase className="w-5 h-5 text-primary" />
                          ) : (
                            <GraduationCap className="w-5 h-5 text-blue-600" />
                          )}
                          <Badge
                            variant={
                              exp.type === "work" ? "default" : "secondary"
                            }
                          >
                            {exp.type === "work" ? "Work" : "Education"}
                          </Badge>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {exp.title}
                        </CardTitle>
                        <div className="text-lg font-semibold text-muted-foreground">
                          {exp.company}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {exp.achievements && (
                          <div className="mb-4">
                            <h4 className="font-semibold mb-2">
                              Key Achievements:
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div
                  className={`hidden md:flex items-center w-full ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 px-6">
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          {exp.type === "work" ? (
                            <Briefcase className="w-5 h-5 text-primary" />
                          ) : (
                            <GraduationCap className="w-5 h-5 text-blue-600" />
                          )}
                          <Badge
                            variant={
                              exp.type === "work" ? "default" : "secondary"
                            }
                          >
                            {exp.type === "work" ? "Work" : "Education"}
                          </Badge>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {exp.title}
                        </CardTitle>
                        <div className="text-lg font-semibold text-muted-foreground">
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {exp.achievements && (
                          <div className="mb-4">
                            <h4 className="font-semibold mb-2">
                              Key Achievements:
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Node - Desktop */}
                  <div className="relative flex items-center justify-center w-4 h-4 bg-primary rounded-full border-4 border-background z-10">
                    <div className="w-2 h-2 bg-background rounded-full" />
                  </div>

                  <div className="flex-1 px-6" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
