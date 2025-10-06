import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-cultural.jpg";
import logoInstituto from "@/assets/logo-instituto-fluir.png";

interface HeroProps {
  onCtaClick: () => void;
}

const Hero = ({ onCtaClick }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center mb-8">
            <img 
              src={logoInstituto} 
              alt="Instituto Fluir" 
              className="h-20 md:h-28"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Rede Mapas — Cultura Conectada por{" "}
            <span className="text-gradient inline-block">
              Dados e Pessoas
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Com o apoio do Instituto Fluir, fortalecemos a gestão cultural com tecnologia aberta, 
            consultoria e eficiência na aplicação da PNAB.
          </p>

          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-6 h-auto relative z-[9999]"
            onClick={onCtaClick}
            aria-label="Preencher formulário para fazer parte da Rede Mapas"
          >
            Faça parte dessa transformação
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
