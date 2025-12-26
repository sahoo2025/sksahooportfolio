import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "AI-Powered Data Analyzer",
    description:
      "Built a machine learning pipeline to analyze and predict patterns from real-world datasets using Python, Pandas, and Scikit-Learn.",
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-Learn"],
    github: "https://github.com/sahoo2025",
    demo: null,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS showcasing projects and skills.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/sahoo2025",
    demo: null,
  },
  {
    title: "Full Stack Web Application",
    description:
      "Developed a responsive web application with HTML, CSS, JavaScript frontend and Node.js backend with RESTful API integration.",
    tags: ["JavaScript", "Node.js", "REST API", "HTML/CSS"],
    github: "https://github.com/sahoo2025",
    demo: null,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4">
            My Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Showcasing practical applications of my skills and learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-300 flex flex-col"
            >
              <h3 className="font-display font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border/50 hover:border-primary/50 gap-2"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    Code
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground gap-2"
                  disabled
                >
                  <ExternalLink size={16} />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
