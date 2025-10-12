import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/evgeniy-portrait.jpeg";
import logo from "@/assets/logo-2kad.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-glow blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20 hover:bg-primary/20 hover:shadow-glow transition-all duration-300">
              <img src={logo} alt="2kad.ru" className="h-6" />
              <span className="text-sm font-medium text-primary">Основатель компании с 2012 года</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Евгений Зоткин
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Кадастровый инженер | Геодезист | Картограф | IT‑инноватор | Тендерный специалист | Урбанист
            </p>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Тверь, Россия</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-hero hover:opacity-90 transition-opacity shadow-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Связаться со мной
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Мои достижения
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full" />
            <img 
              src={heroImage} 
              alt="Евгений Зоткин" 
              className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
