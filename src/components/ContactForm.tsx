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
                src="https://institutofluir.org.br/wp-admin/admin-ajax.php?action=frm_forms_preview&form=rede-mapas"
                allowFullScreen
                className="w-full h-[821px]"
                title="Formulário de Cadastro - Rede Mapas"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
