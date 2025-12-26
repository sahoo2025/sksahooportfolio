const experiences = [
  {
    title: "AI Intern",
    company: "Unified Mentor Pvt. Ltd.",
    period: "Dec 2024 – Present",
    current: true,
    points: [
      "Working with AI and machine learning concepts using Python",
      "Data preprocessing and basic AI model building",
      "Exploring real-world AI applications and solutions",
    ],
  },
  {
    title: "Software Development Intern",
    company: "Andolasoft, Inc.",
    period: "Sep 2024 – Nov 2024",
    current: false,
    points: [
      "Worked in Agile SDLC environment with cross-functional teams",
      "Used Orangescrum for project and task management",
      "Participated in requirement analysis and team collaboration",
    ],
  },
  {
    title: "Data Science Intern",
    company: "Internshala",
    period: "Jun 2024 – Nov 2024",
    current: false,
    points: [
      "Data cleaning, preprocessing, and exploratory data analysis",
      "Built machine learning models using Python and Scikit-Learn",
      "Extracted actionable insights from real-world datasets",
    ],
  },
  {
    title: "Full Stack Web Development Intern",
    company: "Edu Tantr",
    period: "Oct 2024 – Dec 2024",
    current: false,
    points: [
      "Developed responsive web pages using HTML, CSS, and JavaScript",
      "Implemented basic frontend-backend integration",
      "Gained hands-on experience with modern web development practices",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Building expertise through diverse internship opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title + exp.company}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary md:-translate-x-1/2 -translate-x-1/2 mt-2 shadow-glow" />

                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-display font-semibold text-xl text-foreground">
                        {exp.title}
                      </h3>
                      {exp.current && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary border border-primary/30">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
