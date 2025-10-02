import institutoImage from "@/assets/instituto-fluir.jpg";
const InstitutoSection = () => {
  return <section className="py-20 bg-muted" id="instituto">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                O Papel do Instituto Fluir
              </h2>
              
              <div className="space-y-4 text-foreground/90">
                <p className="text-lg leading-relaxed">
                  O <strong>Instituto Fluir</strong> integra e fortalece a Rede Mapas, trazendo experiência 
                  em mais de <strong>40 municípios</strong> e <strong>70 editais</strong> que processaram 
                  mais de <strong>27 mil inscrições</strong>.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Atuamos com <strong>tecnologia, consultoria, suporte e formação de equipes</strong>, 
                  sempre com foco em transparência, eficiência e participação social.
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2 animate-scale-in">
              <img src={institutoImage} alt="Instituto Fluir - Colaboração e gestão cultural" className="rounded-2xl shadow-elegant w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default InstitutoSection;