import { Layers, DoorOpen, Building2 } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Janelas de Alumínio",
    description: "Janelas em alumínio que unem conforto, desempenho e estética. Disponíveis em diferentes tipologias, oferecem excelente vedação, isolamento térmico e acústico, além de funcionamento suave e acabamento de alto padrão.",
  },
  {
    icon: DoorOpen,
    title: "Portas Sob Medida",
    description: "Portas em alumínio sob medida para grandes vãos, com design moderno e máxima entrada de luz natural. Sistemas com deslizamento leve, fechamento suave e vedação eficiente, garantindo conforto, durabilidade e precisão.",
  },
  {
    icon: Building2,
    title: "Fachadas Envidraçadas",
    description: "Fachadas envidraçadas com alto padrão estético e tecnológico, incluindo pele de vidro, structural glazing e fachadas cortina. Soluções que valorizam o projeto com imponência, eficiência e desempenho.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-16 sm:py-24 lg:py-32 bg-charcoal">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-silver uppercase tracking-[0.2em] text-sm font-semibold mb-4">Soluções</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Nossas Soluções em Alumínio
          </h2>
          <p className="text-steel max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Oferecemos um portfólio completo de soluções em esquadrias de alumínio,
            projetadas para atender às mais exigentes demandas de engenharia e arquitetura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-8 sm:p-10 rounded-sm border border-primary-foreground/10 bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-500 hover:-translate-y-2 hover:border-primary-foreground/20"
            >
              <div className="w-14 h-14 rounded-sm bg-navy-light/20 flex items-center justify-center mb-6 group-hover:bg-navy-light/40 transition-colors duration-300">
                <service.icon size={30} className="text-silver group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-primary-foreground mb-4">{service.title}</h3>
              <p className="text-steel leading-relaxed text-sm sm:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
