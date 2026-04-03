import heroImage from "@/assets/hero-facade.jpg";
import { FileText } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const HeroSection = () => {
  const whatsappUrl = "https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.";

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Fachada moderna com esquadrias de alumínio de alto padrão"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 overlay-dark" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-silver uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm font-medium mb-4 md:mb-6 animate-fade-in-up">
            Korviam Alumínio
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-4 md:mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Esquadrias de Alumínio Sob Medida com Padrão Premium
          </h2>
          <p className="text-silver text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Soluções completas em alumínio para projetos residenciais, comerciais e corporativos com alto nível de acabamento e desempenho.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] text-white font-black rounded-lg hover:bg-[#12883d] transition-all duration-300 shadow-[0_8px_20px_rgba(37,211,102,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(37,211,102,0.5)] active:scale-95"
            >
              <WhatsAppIcon size={24} color="white" />
              Solicite seu orçamento
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-[#25D366] text-[#25D366] font-black rounded-lg hover:bg-[#25D366]/5 transition-all duration-300 shadow-lg hover:-translate-y-1 active:scale-95 bg-white/5 backdrop-blur-sm"
            >
              <WhatsAppIcon size={24} color="#25D366" />
              Fale com um especialista
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
