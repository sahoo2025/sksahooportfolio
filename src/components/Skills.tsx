const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "REST APIs"],
  },
  {
    title: "Data & AI",
    skills: ["Pandas", "NumPy", "Scikit-Learn", "Machine Learning", "Data Analysis"],
  },
  {
    title: "AI Tools & Technologies",
    skills: ["LLMs", "Prompt Engineering", "RAG", "LangChain"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Power BI", "Agile (Orangescrum)"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            My Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A comprehensive toolkit built through internships and hands-on projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="font-display font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
