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

  return <section id="skills">skills</section>;
}
