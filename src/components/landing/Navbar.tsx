import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-charcoal/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="font-serif text-xl font-bold text-primary-foreground tracking-wide">
          KORVIAM
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-silver hover:text-primary-foreground text-sm uppercase tracking-wider transition-colors duration-300">
              {l.label}
            </a>
          ))}
          <a href="#contato" className="px-5 py-2 bg-primary-foreground text-primary text-sm font-semibold rounded-sm hover:bg-silver transition-colors">
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
            <a href="#contato" onClick={() => setOpen(false)} className="block w-full text-center px-5 py-3 bg-primary-foreground text-primary text-sm font-semibold rounded-sm">
              Orçamento
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
