import { Mail, Download, MapPin, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Open to work badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-slide-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
            <span className="text-sm text-primary font-medium">Open to work</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Hi, I'm{" "}
            <span className="text-primary">Suchitra Kumar Sahoo</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-6 animate-slide-up font-display" style={{ animationDelay: "0.2s" }}>
            <span className="font-light italic">Aspiring</span>{" "}
            <span className="text-foreground font-medium">Software Engineer</span>{" "}
            <span className="text-muted-foreground">|</span>{" "}
            <span className="text-foreground font-medium">AI Engineer</span>
          </p>

          {/* Description */}
          <p className="text-muted-foreground text-lg max-w-2xl mb-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            Computer Science student passionate about building intelligent, data-driven solutions. 
            Experienced in AI, Machine Learning, and Full Stack Development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8"
            >
              <Mail size={18} />
              Get in Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border/50 text-foreground hover:bg-secondary gap-2 px-8"
              asChild
            >
              <a href="/resume/Suchitra-Kumar-Sahoo-Resume.pdf" download>
                <Download size={18} />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-muted-foreground animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <MapPin size={16} className="text-primary" />
            <span>Bhubaneswar, Odisha, India</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce-subtle"
        >
          <ChevronDown size={28} />
        </button>
      </div>
    </section>
  );
};
