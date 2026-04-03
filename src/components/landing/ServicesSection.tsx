import { Layers, DoorOpen, Building2, LayoutGrid, RefreshCcw, Settings } from "lucide-react";

const services = [
  { icon: Layers, title: "Janelas de Alumínio", description: "Janelas de correr, maxim-ar, pivotantes e guilhotina com perfis de alto desempenho e vedação superior." },
  { icon: DoorOpen, title: "Portas Sob Medida", description: "Portas de correr, pivotantes e de abrir em alumínio, com design contemporâneo e funcionalidade." },
  { icon: Building2, title: "Fachadas Envidraçadas", description: "Sistemas de fachada em pele de vidro e structural glazing para projetos comerciais e corporativos." },
  { icon: LayoutGrid, title: "Fechamento de Ambientes", description: "Divisórias e fechamentos em alumínio e vidro para escritórios, salas e áreas internas." },
  { icon: RefreshCcw, title: "Retrofit de Esquadrias", description: "Modernização e substituição de esquadrias antigas, preservando a estética e melhorando o desempenho." },
  { icon: Settings, title: "Manutenção Técnica", description: "Manutenção corretiva e preventiva, assistência técnica e soluções para infiltração." },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-navy-light uppercase tracking-[0.2em] text-sm font-semibold mb-4 text-silver">Soluções</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Nossas Soluções em Alumínio
          </h2>
          <p className="text-steel max-w-2xl mx-auto text-lg">
            Oferecemos um portfólio completo de soluções em esquadrias de alumínio, 
            projetadas para atender às mais exigentes demandas de engenharia e arquitetura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`reveal delay-${(i % 3 + 1) * 100} group p-8 rounded-sm border border-primary-foreground/10 bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-500 hover:-translate-y-1`}
            >
              <div className="w-14 h-14 rounded-sm bg-navy-light/20 flex items-center justify-center mb-6 group-hover:bg-navy-light/40 transition-colors duration-300">
                <service.icon size={28} className="text-silver group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-3">{service.title}</h3>
              <p className="text-steel leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
