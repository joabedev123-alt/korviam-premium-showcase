import { MessageCircle, ArrowRight } from "lucide-react";

const CtaSection = () => {
  const whatsappUrl = "https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.";

  return (
    <section className="py-24 lg:py-32 metallic-shine relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 to-navy/90" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto reveal">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Solicite seu projeto sob medida agora
          </h2>
          <p className="text-silver text-lg mb-10 leading-relaxed">
            Entre em contato com nossa equipe técnica e receba uma proposta personalizada para o seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-primary-foreground font-semibold rounded-sm transition-colors duration-300"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-sm hover:bg-silver transition-colors duration-300"
            >
              Enviar mensagem
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
