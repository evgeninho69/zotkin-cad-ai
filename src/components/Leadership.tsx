import { Users, Zap, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const Leadership = () => {
  const principles = [
    {
      icon: Users,
      title: "Гибкое делегирование",
      points: [
        "Передача ответственности с сохранением контроля качества",
        "Личное погружение в ключевые и критичные процессы",
        "Развитие самостоятельности команды"
      ]
    },
    {
      icon: Zap,
      title: "Работа в сложных условиях",
      points: [
        "Эффективность при дефиците ресурсов и сжатых сроках",
        "Сохранение работоспособности при максимальных объёмах",
        "Поддержание командного духа в стрессовых ситуациях"
      ]
    },
    {
      icon: TrendingUp,
      title: "Мотивация и развитие",
      points: [
        "Умение увлечь идеей и показать ценность проекта",
        "Способность вести людей за собой",
        "Инвестирование в профессиональный рост сотрудников"
      ]
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-overlay opacity-30" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-glow blur-3xl -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-4">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Лидерство</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Лидерство и подход</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Стиль управления, основанный на делегировании полномочий, личном погружении в ключевые процессы и умении вдохновлять команду
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <Card 
                  key={idx}
                  className="p-8 backdrop-blur-lg bg-card/80 border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-500 group animate-slide-up"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-hero rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{principle.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {principle.points.map((point, pointIdx) => (
                      <li key={pointIdx} className="flex items-start gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                        <span className="text-muted-foreground leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
