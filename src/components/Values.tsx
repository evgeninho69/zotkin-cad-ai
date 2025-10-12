import { Heart, Lightbulb, Eye, Smile } from "lucide-react";
import { Card } from "@/components/ui/card";
import fieldImage from "@/assets/evgeniy-field.jpeg";
import mountainImage from "@/assets/evgeniy-mountain.jpeg";

const values = [
  {
    icon: Heart,
    title: "Увлечённость процессом",
    description: "Полное погружение в каждый проект с искренним интересом к деталям",
  },
  {
    icon: Lightbulb,
    title: "Открытость к инновациям",
    description: "Постоянный поиск новых технологий и решений для оптимизации работы",
  },
  {
    icon: Eye,
    title: "Насмотренность",
    description: "Обширный опыт работы по всей России, понимание специфики разных регионов",
  },
  {
    icon: Smile,
    title: "Позитивное мышление",
    description: "Сохранение спокойствия и работоспособности даже при больших нагрузках",
  },
];

const Values = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Heart className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Ценности</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Принципы работы</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6 animate-slide-up">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-shadow duration-300 border-none bg-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-hero rounded-lg flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-4 animate-scale-in">
            <img
              src={fieldImage}
              alt="Работа в поле"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
            <img
              src={mountainImage}
              alt="Активный отдых"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>

        <Card className="p-8 bg-card shadow-lg border-none animate-fade-in">
          <h3 className="text-2xl font-bold mb-4 text-center">География и опыт</h3>
          <p className="text-lg text-center text-muted-foreground mb-6">
            Проехал почти всю Россию по работе и личным проектам
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-medium">Калининградская область</span>
            </div>
            <div className="px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-medium">Красноярский край</span>
            </div>
            <div className="px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-medium">Республика Тыва</span>
            </div>
            <div className="px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-medium">Забайкальский край</span>
            </div>
            <div className="px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-medium">Амурская область</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Values;
