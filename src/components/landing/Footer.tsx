import { Instagram, Facebook, Linkedin, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal py-12 sm:py-16 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          {/* Logo + descrição */}
          <div className="flex flex-col items-start">
            <img
              src="/Eliezer 01-Photoroom.png"
              alt="Eliezer Alumínio Logo"
              className="h-20 sm:h-24 w-auto object-contain mb-4 sm:mb-6"
            />
            <p className="text-steel leading-relaxed text-sm">
              Especialistas em esquadrias de alumínio sob medida para projetos residenciais,
              comerciais e corporativos. Qualidade, precisão e alto padrão de acabamento.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Navegação</h4>
            <ul className="space-y-2 text-steel text-sm">
              <li><a href="#inicio" className="hover:text-primary-foreground transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-primary-foreground transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="hover:text-primary-foreground transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-primary-foreground transition-colors">Portfólio</a></li>
              <li><a href="#contato" className="hover:text-primary-foreground transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contato + redes */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Contato</h4>
            <div className="space-y-3 text-steel text-sm">
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>(19) 0000-0000</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span>Campinas, SP</span>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-sm bg-primary-foreground/10 flex items-center justify-center text-steel hover:text-primary-foreground hover:bg-primary-foreground/20 transition-all" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-primary-foreground/10 flex items-center justify-center text-steel hover:text-primary-foreground hover:bg-primary-foreground/20 transition-all" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-primary-foreground/10 flex items-center justify-center text-steel hover:text-primary-foreground hover:bg-primary-foreground/20 transition-all" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-primary-foreground/10 pt-6 sm:pt-8 text-center space-y-2">
          <p className="text-steel text-xs sm:text-sm">
            © {new Date().getFullYear()} Korviam Alumínio. Todos os direitos reservados.
          </p>
          <p className="text-steel/60 text-xs flex items-center justify-center gap-1 flex-wrap">
            Produzida com <span className="text-red-500">❤️</span> por{" "}
            <a
              href="https://camaly.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-[#25D366]/80 font-semibold transition-colors underline-offset-2 hover:underline"
            >
              CAMALY
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
