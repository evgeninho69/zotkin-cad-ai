import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Achievements from "@/components/Achievements";
import Competencies from "@/components/Competencies";
import Experience from "@/components/Experience";
import Leadership from "@/components/Leadership";
import Geography from "@/components/Geography";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Mission />
      <Achievements />
      <Competencies />
      <Experience />
      <Leadership />
      <Geography />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
