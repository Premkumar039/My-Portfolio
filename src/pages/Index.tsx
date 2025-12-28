import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Prem Kumar R | UI/UX Designer Portfolio</title>
        <meta 
          name="description" 
          content="Creative UI/UX Designer crafting user-centric digital experiences. Expert in Figma, Adobe XD, prototyping, and user research. View my portfolio and let's create something amazing together." 
        />
        <meta name="keywords" content="UI/UX Designer, Figma, Adobe XD, User Experience, Product Design, Tamil Nadu" />
        <meta property="og:title" content="Prem Kumar R | UI/UX Designer Portfolio" />
        <meta property="og:description" content="Creative UI/UX Designer crafting user-centric digital experiences." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://premkumar.design" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
