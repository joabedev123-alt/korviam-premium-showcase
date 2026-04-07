import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#contato", label: "Contato" },
];

const Navbar = () => {
  const [atTop, setAtTop] = useState(true);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const whatsappUrl = "https://wa.me/5519995781860?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.";

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 10);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    onScroll();
    checkMobile();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // No mobile, a navbar sempre fica visível; no desktop, some no scroll
  const navVisible = isMobile ? true : atTop;

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navVisible
            ? "opacity-100 translate-y-0 bg-transparent py-3 sm:py-5"
            : "opacity-0 -translate-y-full pointer-events-none py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between relative">
          {/* Logo */}
          <a href="#inicio" className="flex items-center flex-shrink-0" onClick={handleLinkClick}>
            <img
              src="/Eliezer 01-Photoroom.png"
              alt="Eliezer Alumínio Logo"
              className="h-12 sm:h-20 md:h-28 lg:h-36 w-auto object-contain"
            />
          </a>

          {/* Links — desktop */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-silver hover:text-primary-foreground text-sm uppercase tracking-wider transition-colors duration-300 whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Botão WhatsApp — desktop */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#25D366] text-white text-sm font-black rounded-lg hover:bg-[#12883d] transition-all shadow-[0_4px_12px_rgba(37,211,102,0.3)] hover:scale-105 active:scale-95"
            >
              <WhatsAppIcon size={22} color="white" />
              Orçamento
            </a>
          </div>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-primary-foreground w-10 h-10 flex items-center justify-center rounded-lg bg-black/30 backdrop-blur-sm"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Menu mobile */}
        {open && (
          <div className="md:hidden bg-charcoal/98 backdrop-blur-md border-t border-primary-foreground/10">
            <div className="container mx-auto px-6 py-5 space-y-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={handleLinkClick}
                  className="flex items-center text-silver hover:text-primary-foreground hover:bg-white/5 text-sm uppercase tracking-wider transition-colors rounded-md px-3 py-3"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center gap-3 w-full text-center px-5 py-4 bg-[#25D366] text-white text-base font-black rounded-lg shadow-[0_8px_20px_rgba(37,211,102,0.3)] active:scale-95"
                >
                  <WhatsAppIcon size={24} color="white" />
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay para fechar menu ao clicar fora */}
      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
