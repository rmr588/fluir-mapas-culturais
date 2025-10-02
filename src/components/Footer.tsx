import { Mail, Phone } from "lucide-react";
import logoInstituto from "@/assets/logo-instituto-fluir.png";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Rede Mapas
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                Cultura conectada por dados e pessoas. Fortalecendo a gestão cultural 
                com tecnologia aberta e transparente.
              </p>
            </div>

            <div>
              <div className="mb-4">
                <img src={logoInstituto} alt="Instituto Fluir" className="h-12 brightness-0 invert" />
              </div>
              <div className="space-y-2 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:contato@institutofluir.org.br" className="hover:text-accent transition-smooth" aria-label="Enviar e-mail para o Instituto Fluir">contato@mapas.cultura.org.br</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="https://wa.me/556298754467" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-smooth" aria-label="Abrir WhatsApp do Instituto Fluir">
                    (062) 9.9875-4467
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Rede Mapas & Instituto Fluir. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;