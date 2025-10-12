import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import chessThinking from "@/assets/chess-thinking.jpeg";
import chessGame from "@/assets/chess-game.jpeg";
import familyDubai from "@/assets/family-dubai.jpeg";

const Hobbies = () => {
  const hobbies = [
    {
      icon: "♟️",
      title: "Шахматы",
      description: "Стратегическое мышление и интеллектуальные вызовы"
    },
    {
      icon: "⚽",
      title: "Футбол",
      description: "Командная игра для поддержания физической формы"
    },
    {
      icon: "✈️",
      title: "Путешествия",
      description: "Исследование новых мест, культур и архитектуры"
    },
    {
      icon: "⛷️",
      title: "Горные лыжи",
      description: "Сочетание скорости, свободы и красоты заснеженных пейзажей"
    },
    {
      icon: "🤖",
      title: "Искусственный интеллект",
      description: "Изучение новейших технологий и применение в работе"
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-overlay opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-glow blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 backdrop-blur-sm rounded-full mb-4">
            <Heart className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Хобби и личная жизнь</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Хобби и личная жизнь</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Помимо профессиональной деятельности, уделяю время разностороннему саморазвитию и семье
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {hobbies.map((hobby, idx) => (
              <Card 
                key={idx}
                className="p-6 backdrop-blur-lg bg-card/70 border-primary/10 hover:border-primary/30 hover:shadow-glow transition-all duration-500 group animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{hobby.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{hobby.title}</h3>
                <p className="text-sm text-muted-foreground">{hobby.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl animate-scale-in">
              <img 
                src={chessThinking} 
                alt="Шахматная партия - стратегическое мышление" 
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-sm font-medium backdrop-blur-sm">Стратегическое мышление</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-xl animate-scale-in" style={{ animationDelay: "100ms" }}>
              <img 
                src={chessGame} 
                alt="Турнир по шахматам" 
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-sm font-medium backdrop-blur-sm">Шахматные турниры</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-xl animate-scale-in" style={{ animationDelay: "200ms" }}>
              <img 
                src={familyDubai} 
                alt="Семья в Дубае" 
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-sm font-medium backdrop-blur-sm">Семейные путешествия</p>
              </div>
            </div>
          </div>

          <Card className="p-8 backdrop-blur-lg bg-gradient-accent/10 border-accent/20 shadow-glow-accent animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="text-4xl">❤️</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Семья</h3>
                <p className="text-lg leading-relaxed">
                  Женат, отец двух замечательных дочерей. Семейные ценности и время, проведенное вместе — важнейший приоритет.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
