import { UserCheck, Ruler, Gem, Sparkles, Headset, RefreshCcw } from "lucide-react";

const differentials = [
  { icon: UserCheck, title: "Atendimento Personalizado", text: "Acompanhamento dedicado em cada etapa, do projeto à instalação final." },
  { icon: Ruler, title: "Projetos Sob Medida", text: "Cada esquadria é projetada de acordo com as especificações e necessidades do cliente." },
  { icon: Gem, title: "Materiais de Alta Qualidade", text: "Utilizamos perfis de alumínio e acessórios das melhores marcas do mercado." },
  { icon: Sparkles, title: "Acabamento Superior", text: "Pintura eletrostática, anodização e acabamentos que garantem durabilidade e estética." },
  { icon: Headset, title: "Suporte Técnico Especializado", text: "Equipe técnica capacitada para orientação, manutenção e resolução de problemas." },
  { icon: RefreshCcw, title: "Experiência em Retrofit", text: "Expertise na modernização de esquadrias em edificações existentes." },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-navy-light uppercase tracking-[0.2em] text-sm font-semibold mb-4">Diferenciais</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Por que escolher a Korviam
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Compromisso com excelência em cada detalhe do seu projeto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, i) => (
            <div key={i} className={`reveal delay-${(i % 3 + 1) * 100} flex gap-5 group`}>
              <div className="w-12 h-12 min-w-[3rem] rounded-sm bg-navy flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <item.icon size={22} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
