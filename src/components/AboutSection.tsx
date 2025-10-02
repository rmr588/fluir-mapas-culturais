import networkIcon from "@/assets/network-icon.png";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background" id="sobre">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8 animate-scale-in">
            <img 
              src={networkIcon} 
              alt="Ícone da Rede Mapas" 
              className="w-24 h-24"
            />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gradient">
            A Rede Mapas
          </h2>
          
          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed animate-slide-up">
            <p className="text-lg md:text-xl text-center mb-8">
              Criada em 2023, a <strong>Rede Mapas</strong> nasceu da Política Nacional Aldir Blanc (PNAB) 
              e evoluiu de uma plataforma de software livre para um verdadeiro ecossistema de soluções digitais.
            </p>
            
            <p className="text-lg md:text-xl text-center">
              Hoje, conecta <strong>governos, artistas, coletivos e instituições</strong>, garantindo 
              interoperabilidade, padrões abertos e transparência na gestão cultural.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
