import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Achievements from "@/components/Achievements";
import Competencies from "@/components/Competencies";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Mission />
      <Achievements />
      <Competencies />
      <Values />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
