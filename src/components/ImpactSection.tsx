import ecosystemImage from "@/assets/ecosystem.jpg";

const ImpactSection = () => {
  return (
    <section className="py-20 bg-muted" id="impacto">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <img 
                src={ecosystemImage} 
                alt="Ecossistema da Rede Mapas" 
                className="rounded-2xl shadow-elegant w-full h-auto"
              />
            </div>
            
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Impacto e Ecossistema
              </h2>
              
              <div className="space-y-4 text-foreground/90">
                <p className="text-lg leading-relaxed">
                  Com a <strong>Rede Mapas</strong> e o <strong>Instituto Fluir</strong>, a cultura brasileira 
                  ganha um ecossistema de tecnologia viva, aberta e inclusiva, que fortalece políticas públicas 
                  e democratiza o acesso digital em todo o Brasil.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-card rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-secondary mb-1">40+</div>
                  <div className="text-sm text-muted-foreground">Municípios</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-accent mb-1">70+</div>
                  <div className="text-sm text-muted-foreground">Editais</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg shadow-md">
                  <div className="text-3xl font-bold gradient-cultural bg-clip-text text-transparent mb-1">20k+</div>
                  <div className="text-sm text-muted-foreground">Inscrições</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
