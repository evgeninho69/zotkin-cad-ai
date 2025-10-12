import { Briefcase, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import constructionImage from "@/assets/construction-site.jpeg";
import railwayImage from "@/assets/railway-project.jpeg";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-overlay opacity-50" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-glow blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-4">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Опыт и кейсы</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Опыт и ключевые кейсы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Многолетний профессиональный путь от инженера-исполнителя до руководителя компании
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          <Card className="p-8 backdrop-blur-lg bg-card/80 border-primary/20 shadow-glow hover:shadow-glow-accent transition-all duration-500 group animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-hero rounded-lg group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">2kad.ru — Кадастровые и геодезические работы</h3>
                <p className="text-primary font-semibold">с 2012 года</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="relative group/img overflow-hidden rounded-xl">
                <img 
                  src={railwayImage} 
                  alt="Забайкальская железная дорога" 
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover/img:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-sm font-medium">Забайкальская железная дорога</p>
                </div>
              </div>
              <div className="relative group/img overflow-hidden rounded-xl">
                <img 
                  src={constructionImage} 
                  alt="Геодезия на крупном объекте" 
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover/img:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-sm font-medium">Геодезия на крупном объекте</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <p className="text-lg leading-relaxed">
                Полный цикл услуг: от геодезической съёмки до постановки на кадастровый учёт
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-primary/5 rounded-lg backdrop-blur-sm border border-primary/10">
                  <h4 className="font-semibold mb-2 text-primary">География проектов</h4>
                  <p className="text-sm text-muted-foreground">Вся территория Российской Федерации</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg backdrop-blur-sm border border-primary/10">
                  <h4 className="font-semibold mb-2 text-primary">Специализация</h4>
                  <p className="text-sm text-muted-foreground">Сложные инженерные и инфраструктурные проекты</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border/50 pt-6">
              <h4 className="font-bold mb-4 text-lg">Типы объектов:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Железнодорожная логистика и транспортная инфраструктура",
                  "Энергетические объекты и линии электропередач",
                  "Девелоперские проекты и жилищное строительство",
                  "Муниципальные и государственные объекты"
                ].map((type, idx) => (
                  <div key={idx} className="flex items-start gap-2 group/item">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 group-hover/item:scale-150 transition-transform" />
                    <p className="text-sm">{type}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-accent/10 rounded-lg backdrop-blur-sm border border-accent/20">
              <p className="font-semibold text-center">
                <span className="text-accent">Команда и подход:</span> Высокопрофессиональная мини-группа с результативностью выше среднерыночной
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
