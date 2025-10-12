import { 
  MapPin, 
  Radio, 
  Map, 
  Home, 
  Bot, 
  FileText, 
  Building2,
  Sparkles
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const competencies = [
  {
    icon: MapPin,
    title: "Кадастр",
    description: "Полный цикл работ, знание законодательства, опыт сдачи объектов любой сложности",
    color: "primary",
  },
  {
    icon: Radio,
    title: "Геодезия",
    description: "Современное оборудование и технологии, интерес к инновациям, опыт горизонтальной съёмки",
    color: "primary",
  },
  {
    icon: Map,
    title: "Картография",
    description: "Создание карт и схем для крупных проектов по всей стране",
    color: "primary",
  },
  {
    icon: Home,
    title: "Недвижимость",
    description: "Экспертные консультации, знание цен и рынка",
    color: "primary",
  },
  {
    icon: Bot,
    title: "Автоматизация и IT",
    description: "n8n, Bitrix24, AI-оркестрация, Prompt Engineering, Cursor, vibe coding",
    color: "accent",
  },
  {
    icon: FileText,
    title: "Тендеры",
    description: "Глубокое знание 44-ФЗ и 223-ФЗ, умение готовить документы и собирать команды",
    color: "primary",
  },
  {
    icon: Building2,
    title: "Урбанистика",
    description: "Фокус на автоматизации сбора и анализа исходных данных, генерации идей развития территорий",
    color: "success",
  },
  {
    icon: Sparkles,
    title: "ИИ-инновации",
    description: "Создание ИИ-системы для автоматизации подготовки межевых и технических планов",
    color: "accent",
  },
];

const Competencies = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-success" />
            <span className="text-sm font-medium text-success">Компетенции</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Ключевые навыки</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Уникальное сочетание инженерных знаний и современных технологий
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competencies.map((competency, index) => {
            const Icon = competency.icon;
            const colorClasses = {
              primary: "bg-primary/10 text-primary",
              accent: "bg-accent/10 text-accent",
              success: "bg-success/10 text-success",
            };
            
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 border-none bg-card group hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`inline-flex p-3 rounded-lg mb-4 ${colorClasses[competency.color as keyof typeof colorClasses]}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{competency.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {competency.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-accent text-accent-foreground shadow-xl border-none animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/20 rounded-lg">
                <Bot className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">ИИ-система для кадастра</h3>
                <p className="text-lg mb-4 opacity-90">
                  Разрабатываю систему автоматизации подготовки межевых и технических планов:
                </p>
                <ul className="space-y-2 opacity-90">
                  <li>• Агент-оркестратор для сбора данных</li>
                  <li>• Автоматическая генерация XML и PDF</li>
                  <li>• Форматно-логический контроль</li>
                  <li>• Цель: экономия десятков часов работы инженеров</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Competencies;
