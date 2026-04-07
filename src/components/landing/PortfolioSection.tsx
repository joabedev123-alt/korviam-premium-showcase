import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const allImages = [
  { src: "/p01.jpeg", title: "Esquadria Residencial",  category: "Residencial" },
  { src: "/p02.jpeg", title: "Janelas Alto Padrão",    category: "Residencial" },
  { src: "/p03.jpeg", title: "Portas de Correr",       category: "Residencial" },
  { src: "/p04.jpeg", title: "Fachada Envidraçada",    category: "Comercial"   },
  { src: "/p07.jpeg", title: "Janelas Pivotantes",     category: "Residencial" },
  { src: "/p08.jpeg", title: "Divisórias em Vidro",    category: "Comercial"   },
  { src: "/p09.jpeg", title: "Retrofit de Esquadrias", category: "Retrofit"    },
  { src: "/p10.jpeg", title: "Fachada Comercial",      category: "Comercial"   },
  { src: "/p11.jpeg", title: "Pele de Vidro",          category: "Corporativo" },
  { src: "/p12.jpeg", title: "Terraço Panorâmico",     category: "Residencial" },
  { src: "/p14.jpeg", title: "Maxim-ar Premium",       category: "Residencial" },
  { src: "/p15.jpeg", title: "Portas Pivotantes",      category: "Residencial" },
  { src: "/p16.jpeg", title: "Fachada Executiva",      category: "Corporativo" },
  { src: "/p17.jpeg", title: "Esquadrias Sob Medida",  category: "Residencial" },
  { src: "/p18.jpeg", title: "Fechamento Externo",     category: "Comercial"   },
  { src: "/p19.jpeg", title: "Projeto Integrado",      category: "Corporativo" },
  { src: "/p21.jpeg", title: "Acabamento Premium",     category: "Residencial" },
  { src: "/p22.jpeg", title: "Projeto Exclusivo",      category: "Corporativo" },
];

// 3 fileiras distribuídas: 6 / 6 / 6 (com repetição para loop suave)
const rows = [
  allImages.slice(0, 6),
  allImages.slice(6, 12),
  allImages.slice(12, 18),
];

/* ──────────────────────────── LIGHTBOX ──────────────────────────── */
interface LightboxProps {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox = ({ index, onClose, onPrev, onNext }: LightboxProps) => {
  const img = allImages[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Fechar */}
      <button
        className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-all z-10"
        onClick={onClose}
        aria-label="Fechar"
      >
        <X size={22} />
      </button>

      {/* Contador */}
      <p className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm select-none">
        {index + 1} / {allImages.length}
      </p>

      {/* ‹ Prev */}
      <button
        className="absolute left-3 sm:left-8 w-12 h-12 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-all z-10"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Anterior"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Imagem */}
      <div
        className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={img.src}
          src={img.src}
          alt={img.title}
          className="max-h-[78vh] max-w-[88vw] object-contain rounded shadow-2xl"
        />
        <div className="text-center">
          <p className="text-white font-semibold text-base sm:text-lg">{img.title}</p>
          <p className="text-white/40 text-xs uppercase tracking-wider">{img.category}</p>
        </div>
      </div>

      {/* Next › */}
      <button
        className="absolute right-3 sm:right-8 w-12 h-12 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-all z-10"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Próxima"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 flex-wrap justify-center max-w-xs px-4">
        {allImages.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              i === index ? "bg-white scale-150" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

/* ──────────────────────────── CAROUSEL ROW ──────────────────────── */
interface CarouselRowProps {
  images: typeof allImages;
  direction: "left" | "right";
  speed: number;
  globalOffset: number;  // offset de índice global para o lightbox
  onImageClick: (globalIndex: number) => void;
}

const CarouselRow = ({ images, direction, speed, globalOffset, onImageClick }: CarouselRowProps) => {
  // Duplica para loop infinito
  const doubled = [...images, ...images];

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex gap-4"
        style={{
          animation: `carousel-${direction} ${speed}s linear infinite`,
          width: "max-content",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.animationPlayState = "paused")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.animationPlayState = "running")}
      >
        {doubled.map((img, i) => {
          const realIdx = globalOffset + (i % images.length);
          return (
            <div
              key={`${img.src}-${i}`}
              className="group flex-shrink-0 w-72 sm:w-80 lg:w-96 relative overflow-hidden rounded-sm cursor-pointer"
              onClick={() => onImageClick(realIdx)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-48 sm:h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-between p-4">
                <div>
                  <span className="text-silver text-[10px] uppercase tracking-wider">{img.category}</span>
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-primary-foreground">{img.title}</h3>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fade nas bordas */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-charcoal/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-charcoal/80 to-transparent z-10" />
    </div>
  );
};

/* ──────────────────────────── SECTION ──────────────────────────── */
const PortfolioSection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox  = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage     = useCallback(() => setLightboxIndex((p) => p !== null ? (p - 1 + allImages.length) % allImages.length : 0), []);
  const nextImage     = useCallback(() => setLightboxIndex((p) => p !== null ? (p + 1) % allImages.length : 0), []);

  return (
    <section id="portfolio" className="py-16 sm:py-24 lg:py-32 bg-charcoal overflow-hidden w-full">
      {/* Cabeçalho */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-silver uppercase tracking-[0.2em] text-sm font-semibold mb-4">Portfólio</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Projetos Realizados
          </h2>
          <p className="text-steel max-w-2xl mx-auto text-base sm:text-lg">
            Conheça alguns dos projetos que demonstram nosso padrão de qualidade e excelência técnica.
          </p>
          <p className="text-steel/50 text-xs sm:text-sm mt-2">
            <span className="sm:hidden">Toque em qualquer imagem para ampliar · Toque no carrossel para pausar</span>
            <span className="hidden sm:inline">Clique em qualquer imagem para ampliar · Passe o mouse para pausar</span>
          </p>
        </div>
      </div>

      {/* 3 fileiras de carrossel */}
      <div className="flex flex-col gap-5">
        {rows.map((rowImages, rowIdx) => (
          <CarouselRow
            key={rowIdx}
            images={rowImages}
            direction={rowIdx % 2 === 0 ? "left" : "right"}
            speed={rowIdx === 0 ? 28 : rowIdx === 1 ? 35 : 22}
            globalOffset={rowIdx * 6}
            onImageClick={openLightbox}
          />
        ))}
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes carousel-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes carousel-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
};

export default PortfolioSection;
