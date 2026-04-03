import heroImage from "@/assets/hero-facade.jpg";
import { MessageCircle, FileText } from "lucide-react";

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
          <p className="text-silver uppercase tracking-[0.3em] text-sm font-medium mb-6 animate-fade-in-up">
            Korviam Alumínio
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Esquadrias de Alumínio Sob Medida com Padrão Premium
          </h1>
          <p className="text-silver text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Soluções completas em alumínio para projetos residenciais, comerciais e corporativos com alto nível de acabamento e desempenho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-sm hover:bg-silver transition-colors duration-300"
            >
              <FileText size={20} />
              Solicite seu orçamento
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-semibold rounded-sm hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <MessageCircle size={20} />
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
