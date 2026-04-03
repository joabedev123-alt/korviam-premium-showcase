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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const whatsappUrl = "https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-charcoal/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center">
          <img 
            src="/Eliezer 01.jpeg" 
            alt="Eliezer Alumínio Logo" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-silver hover:text-primary-foreground text-sm uppercase tracking-wider transition-colors duration-300">
              {l.label}
            </a>
          ))}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#25D366] text-white text-sm font-black rounded-lg hover:bg-[#12883d] transition-all shadow-[0_4px_12px_rgba(37,211,102,0.3)] hover:scale-105 active:scale-95"
          >
            <WhatsAppIcon size={18} color="white" />
            Orçamento
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-charcoal/98 backdrop-blur-md border-t border-primary-foreground/10">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-silver hover:text-primary-foreground text-sm uppercase tracking-wider transition-colors">
                {l.label}
              </a>
            ))}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)} 
              className="flex items-center justify-center gap-3 w-full text-center px-5 py-4 bg-[#25D366] text-white text-base font-black rounded-lg shadow-[0_8px_20px_rgba(37,211,102,0.3)] active:scale-95"
            >
              <WhatsAppIcon size={20} color="white" />
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
