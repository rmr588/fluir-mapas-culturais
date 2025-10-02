import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ContactForm = () => {

  return (
    <section className="py-20 bg-background" id="contato">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-glow border-2 border-accent/30 bg-card animate-scale-in">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold text-primary mb-2">
                Quero fazer parte da Rede Mapas
              </CardTitle>
              <CardDescription className="text-base">
                Preencha o formulário e transforme a gestão cultural do seu município
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSfQOKM8xTXhj9x_YfqJDHPgWJF8kKKzLnUjX9nVQa7LK0zZ7g/viewform?embedded=true"
                width="100%" 
                height="856" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="max-w-2xl"
                title="Formulário de Cadastro - Rede Mapas"
              >
                Carregando…
              </iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
