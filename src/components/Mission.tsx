import { Target, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const Mission = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Моя миссия</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Создаю эффективные решения</h2>
          </div>
          
          <Card className="p-8 shadow-lg border-none bg-gradient-subtle animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-hero rounded-lg">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Создаю эффективные и современные решения в сфере кадастра, геодезии и управления территориями
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Совмещаю инженерные знания, опыт работы с недвижимостью и передовые технологии автоматизации для решения сложных задач.
                </p>
              </div>
            </div>
            
            <div className="border-t pt-6 mt-6">
              <p className="text-lg font-semibold text-center">
                <span className="text-primary">Принцип работы:</span> честность, погружение в детали и поиск инноваций, которые экономят время и ресурсы
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mission;
