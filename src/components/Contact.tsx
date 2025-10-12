import { Mail, Phone, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const contactMethods = [
  {
    icon: Globe,
    label: "Сайт",
    value: "2kad.ru",
    href: "https://2kad.ru",
  },
  {
    icon: Mail,
    label: "Email",
    value: "zotkin@2kad.ru",
    href: "mailto:zotkin@2kad.ru",
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 910 832 5238",
    href: "tel:+79108325238",
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@Evgeninho69",
    href: "https://t.me/Evgeninho69",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
              <Mail className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Контакты</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Давайте сотрудничать</h2>
            <p className="text-xl text-muted-foreground">
              Открыт к новым проектам и партнёрству
            </p>
          </div>

          <Card className="p-8 bg-gradient-subtle shadow-xl border-none animate-slide-up">
            <div className="grid md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group"
                  >
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary bg-card">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gradient-hero rounded-lg group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{method.label}</p>
                          <p className="font-semibold text-lg group-hover:text-primary transition-colors">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">Город: Тверь, Россия</p>
              <Button
                size="lg"
                className="bg-gradient-accent hover:opacity-90 transition-opacity shadow-lg"
                onClick={() => window.location.href = 'mailto:zotkin@2kad.ru'}
              >
                Написать письмо
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
