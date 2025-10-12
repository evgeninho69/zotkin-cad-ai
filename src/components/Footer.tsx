import logo from "@/assets/logo-2kad.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="2kad.ru" className="h-8 brightness-0 invert" />
            <p className="text-sm">© 2012-2025 Евгений Зоткин</p>
          </div>
          
          <p className="text-sm opacity-80">
            Предприниматель • Кадастровый инженер • IT-инноватор
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
