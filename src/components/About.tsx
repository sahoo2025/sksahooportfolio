import { Brain, Database, Code, Puzzle } from "lucide-react";

const highlights = [
  { icon: Brain, title: "AI & Machine Learning", desc: "Building intelligent systems" },
  { icon: Database, title: "Data Science", desc: "Extracting insights from data" },
  { icon: Code, title: "Full Stack Dev", desc: "End-to-end web solutions" },
  { icon: Puzzle, title: "Problem Solving", desc: "Scalable software systems" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4">
            Turning Ideas into Intelligent Solutions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-16">
            <p>
              I am a motivated Computer Science engineering student with strong hands-on 
              experience in AI, Data Science, Machine Learning, and Full Stack Web Development 
              through multiple internships.
            </p>
            <p>
              I enjoy building data-driven and AI-powered solutions and working on real-world 
              datasets. My goal is to start my career in a challenging entry-level role where 
              I can contribute to scalable and intelligent software systems.
            </p>
            <p>
              With experience from companies like Unified Mentor, Andolasoft, and Internshala, 
              I've developed a strong foundation in both technical skills and professional work 
              environments.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
