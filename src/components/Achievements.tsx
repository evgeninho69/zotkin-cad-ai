import { Award, TrendingUp, Users, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const achievements = [
  {
    icon: Award,
    number: "10,000+",
    label: "Реализованных проектов",
    description: "По кадастровым и геодезическим работам по всей России",
  },
  {
    icon: TrendingUp,
    number: "12 лет",
    label: "Успешного развития",
    description: "Руководство компанией 2kad.ru с 2012 года",
  },
  {
    icon: Briefcase,
    number: "30 млн ₽",
    label: "Крупнейший тендер",
    description: "Победа в тендере по 223-ФЗ и 44-ФЗ",
  },
  {
    icon: Users,
    number: "3,000 км",
    label: "Масштаб проекта",
    description: "Ж/д путей в крупнейшем кейсе",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <Award className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Достижения</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Проверенная экспертиза</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более десяти лет успешной работы в сфере кадастра и геодезии
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-shadow duration-300 border-none bg-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 bg-gradient-hero rounded-full mb-4">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{achievement.number}</h3>
                <p className="font-semibold mb-2">{achievement.label}</p>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-primary text-primary-foreground shadow-xl border-none animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Крупный кейс</h3>
            <p className="text-lg mb-4">
              Расформирование производственно-технологического комплекса в Забайкальском крае и Амурской области
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold mb-2">3,000 км</p>
                <p className="opacity-90">Ж/д путей</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">1,500 км</p>
                <p className="opacity-90">Линий электросетей</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">6 мес.</p>
                <p className="opacity-90">Срок реализации</p>
              </div>
            </div>
            <p className="mt-6 text-center font-semibold">
              Проект выполнен в срок ограниченной командой
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Achievements;
