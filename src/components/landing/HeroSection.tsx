const heroImage = "/hero-facade.jpg";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const HeroSection = () => {
  const whatsappUrl = "https://wa.me/5519995781860?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.";

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d1117]"
    >
      {/* Imagem de fundo — contain no mobile para não cortar, cover no desktop */}
      <img
        src={heroImage}
        alt="Fachada moderna com esquadrias de alumínio de alto padrão"
        className="absolute inset-0 w-full h-full object-cover object-center"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 overlay-dark" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-20 sm:pt-24 pb-28 sm:pb-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-silver uppercase tracking-[0.2em] sm:tracking-[0.35em] md:tracking-[0.5em] text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-8 animate-fade-in-up">
            Korviam Alumínio
          </p>
          <h2
            className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-4 md:mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Esquadrias de Alumínio Sob Medida com Padrão Premium
          </h2>
          <p
            className="text-silver text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Soluções completas em alumínio para projetos residenciais, comerciais e corporativos com alto nível de acabamento e desempenho.
          </p>
          <div
            className="flex justify-center animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-12 sm:py-5 border-2 border-[#25D366] text-[#25D366] font-black rounded-lg hover:bg-[#25D366]/10 transition-all duration-300 shadow-lg hover:-translate-y-1 active:scale-95 bg-white/5 backdrop-blur-sm text-sm sm:text-base w-full sm:w-auto"
            >
              <WhatsAppIcon size={30} color="#25D366" className="shrink-0" />
              Fale com um especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
