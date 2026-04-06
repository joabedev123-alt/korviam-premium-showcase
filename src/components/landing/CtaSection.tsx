import { ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const CtaSection = () => {
  const whatsappUrl = "https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.";

  return (
    <section className="py-16 sm:py-24 lg:py-32 metallic-shine relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 to-navy/90" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto reveal">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6">
            Solicite seu projeto sob medida agora
          </h2>
          <p className="text-silver text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
            Entre em contato com nossa equipe técnica e receba uma proposta personalizada para o seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 sm:px-10 sm:py-5 bg-[#25D366] hover:bg-[#12883d] text-white font-black rounded-lg transition-all duration-300 shadow-[0_8px_20px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95 text-sm sm:text-base"
            >
              <WhatsAppIcon size={36} color="white" className="shrink-0" />
              WhatsApp
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 sm:px-10 sm:py-5 bg-primary-foreground text-primary font-black rounded-lg hover:bg-silver transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 text-sm sm:text-base"
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
