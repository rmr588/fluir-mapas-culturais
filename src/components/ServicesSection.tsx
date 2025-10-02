import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Users, FileText, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Implantação da Plataforma Mapas Culturais",
    description: "Infra própria ou SaaS (seguro e escalável)",
  },
  {
    icon: FileText,
    title: "Consultoria e relatórios estratégicos",
    description: "Otimização da PNAB com foco em eficiência e transparência",
  },
  {
    icon: Users,
    title: "Suporte técnico especializado",
    description: "Acompanhamento contínuo para gestores e equipes",
  },
  {
    icon: GraduationCap,
    title: "Formação e capacitação",
    description: "Treinamentos para maximizar o uso da plataforma",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background" id="servicos">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            O que fazemos
          </h2>
          
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Soluções completas para gestão cultural eficiente e transparente
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="shadow-elegant hover:shadow-glow transition-smooth hover:scale-105 animate-slide-up border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full gradient-cultural flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
