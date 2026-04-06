import aboutImage from "@/assets/about-project.jpg";
import { Award, Users, Target, Wrench } from "lucide-react";

const stats = [
  { icon: Award, label: "Qualidade Certificada", value: "Excelência" },
  { icon: Users, label: "Clientes Atendidos", value: "500+" },
  { icon: Target, label: "Projetos Entregues", value: "1.200+" },
  { icon: Wrench, label: "Anos de Experiência", value: "15+" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 sm:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="reveal-left">
            <p className="text-navy-light uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mb-4">Sobre a Empresa</p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Engenharia e design em esquadrias de alumínio
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              A Korviam Alumínio é referência no fornecimento de esquadrias de alumínio sob medida, 
              atendendo projetos residenciais, comerciais e corporativos com o mais alto nível de 
              acabamento e precisão técnica.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              Cada projeto é desenvolvido com atenção integral aos detalhes, desde a concepção até 
              a instalação, garantindo durabilidade, desempenho termoacústico e estética impecável.
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, i) => (
                <div key={i} className={`reveal delay-${(i + 1) * 100}`}>
                  <div className="flex items-center gap-2 md:gap-3 mb-1">
                    <stat.icon size={18} className="text-navy-light" />
                    <span className="text-xl md:text-2xl font-bold text-foreground">{stat.value}</span>
                  </div>
                  <p className="text-muted-foreground text-xs md:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right mt-12 lg:mt-0">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Projeto de esquadrias de alumínio Korviam"
                className="w-full h-[300px] md:h-[500px] object-cover rounded-sm shadow-2xl"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 bg-navy rounded-sm flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <span className="text-3xl font-bold block">15+</span>
                  <span className="text-xs uppercase tracking-wider">Anos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
