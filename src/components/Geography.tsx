import { Globe, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import fieldImage from "@/assets/evgeniy-field.jpeg";
import mountainImage from "@/assets/evgeniy-mountain.jpeg";

const Geography = () => {
  const regions = [
    {
      name: "Калининградская область",
      description: "Уникальная архитектура и близость к Европе"
    },
    {
      name: "Красноярский край",
      description: "Масштабные проекты и суровая красота Сибири"
    },
    {
      name: "Республика Тыва",
      description: "Нетронутая природа и особые вызовы"
    }
  ];

  const values = [
    {
      icon: "✨",
      title: "Увлечённость процессом",
      description: "Искренний интерес к каждому проекту"
    },
    {
      icon: "🚀",
      title: "Открытость к инновациям",
      description: "Постоянное изучение новых технологий"
    },
    {
      icon: "🌍",
      title: "Насмотренность",
      description: "Широкий кругозор благодаря путешествиям"
    },
    {
      icon: "💡",
      title: "Позитивное мышление",
      description: "Конструктивный подход к решению задач"
    }
  ];

  return (
    <section id="geography" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-overlay opacity-40" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-glow blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 backdrop-blur-sm rounded-full mb-4">
            <Globe className="h-4 w-4 text-success" />
            <span className="text-sm font-medium text-success">География и ценности</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">География и ценности</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            За время профессиональной деятельности проехал практически всю Россию по рабочим проектам и личным путешествиям
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl animate-scale-in">
              <img 
                src={fieldImage} 
                alt="Геодезические работы в поле" 
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-lg font-medium backdrop-blur-sm">Работа по всей стране</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-xl animate-scale-in" style={{ animationDelay: "200ms" }}>
              <img 
                src={mountainImage} 
                alt="Горные пейзажи России" 
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-lg font-medium backdrop-blur-sm">От гор до морей</p>
              </div>
            </div>
          </div>

          <Card className="p-8 backdrop-blur-lg bg-card/80 border-success/20 shadow-glow mb-12 animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <Heart className="h-8 w-8 text-success flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Любимые регионы для работы и отдыха</h3>
                <div className="space-y-4">
                  {regions.map((region, idx) => (
                    <div 
                      key={idx} 
                      className="p-4 bg-success/5 rounded-lg backdrop-blur-sm border border-success/10 hover:bg-success/10 hover:shadow-glow transition-all duration-300 group"
                    >
                      <h4 className="font-bold text-lg mb-1 group-hover:text-success transition-colors">{region.name}</h4>
                      <p className="text-sm text-muted-foreground">{region.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <div>
            <h3 className="text-3xl font-bold text-center mb-8">Личные ценности</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => (
                <Card 
                  key={idx}
                  className="p-6 backdrop-blur-lg bg-card/70 border-primary/10 hover:border-primary/30 hover:shadow-glow transition-all duration-500 group animate-fade-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{value.icon}</div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Geography;
