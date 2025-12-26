import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Einstein Academy of Technology & Management",
    period: "2022 – 2026",
    description:
      "Pursuing a comprehensive education in computer science with focus on software development, data structures, and emerging technologies.",
  },
  {
    degree: "Higher Secondary (Science – PCM)",
    institution: "Shanti Institute of Management Studies",
    period: "2020 – 2022",
    description:
      "Completed higher secondary education with Physics, Chemistry, and Mathematics as core subjects.",
  },
];

const certifications = [
  {
    title: "Data Science Training",
    issuer: "Internshala",
    description:
      "Comprehensive training in data science fundamentals, Python, and machine learning.",
  },
  {
    title: "AI Training",
    issuer: "Unified Mentor",
    description:
      "Hands-on training in artificial intelligence concepts and practical applications.",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Edu Tantr",
    description:
      "Complete web development training covering frontend and backend technologies.",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        {/* Education */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Academic Background
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4">
              Education
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Building a strong foundation in computer science and technology
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 flex gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                  <p className="text-muted-foreground text-sm">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Professional Development
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4">
              Certifications
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Recognized credentials demonstrating commitment to continuous learning
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {cert.title}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
