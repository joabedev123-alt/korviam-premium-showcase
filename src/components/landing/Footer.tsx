import { Instagram, Facebook, Linkedin, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal py-16 border-t border-primary-foreground/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-4">Korviam Alumínio</h3>
            <p className="text-steel leading-relaxed text-sm">
              Especialistas em esquadrias de alumínio sob medida para projetos residenciais, 
              comerciais e corporativos. Qualidade, precisão e alto padrão de acabamento.
            </p>
          </div>
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
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-sm bg-primary-foreground/10 flex items-center justify-center text-steel hover:text-primary-foreground hover:bg-primary-foreground/20 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-primary-foreground/10 flex items-center justify-center text-steel hover:text-primary-foreground hover:bg-primary-foreground/20 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-primary-foreground/10 flex items-center justify-center text-steel hover:text-primary-foreground hover:bg-primary-foreground/20 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-steel text-sm">
            © {new Date().getFullYear()} Korviam Alumínio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
