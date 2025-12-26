import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Suchitra Kumar Sahoo | Aspiring Software Engineer & AI Engineer</title>
        <meta
          name="description"
          content="Computer Science student passionate about building intelligent, data-driven solutions. Experienced in AI, Machine Learning, and Full Stack Development."
        />
        <meta
          name="keywords"
          content="Suchitra Kumar Sahoo, Software Engineer, AI Engineer, Machine Learning, Full Stack Developer, Portfolio"
        />
        <meta property="og:title" content="Suchitra Kumar Sahoo | Portfolio" />
        <meta
          property="og:description"
          content="Aspiring Software Engineer & AI Engineer passionate about building intelligent solutions."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://suchi-code-craft.lovable.app" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
