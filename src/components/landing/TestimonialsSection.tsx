import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arq. Fernanda Oliveira",
    role: "Arquiteta — Estúdio FO",
    text: "A Korviam entregou exatamente o que especificamos no projeto. O acabamento das esquadrias superou nossas expectativas e o suporte técnico foi impecável.",
  },
  {
    name: "Carlos Eduardo Martins",
    role: "Diretor — Construtora Horizonte",
    text: "Trabalhamos com a Korviam em três empreendimentos e a qualidade e o cumprimento de prazos são diferenciais claros. Recomendo sem ressalvas.",
  },
  {
    name: "Dra. Mariana Alves",
    role: "Cliente Residencial",
    text: "O projeto da minha residência ficou impecável. As esquadrias em alumínio transformaram completamente a fachada e o conforto térmico da casa.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-charcoal">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-silver uppercase tracking-[0.2em] text-sm font-semibold mb-4">Depoimentos</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-sm border border-primary-foreground/10 bg-primary-foreground/5"
            >
              <Quote size={28} className="text-navy-light mb-4 sm:mb-6 opacity-50" />
              <p className="text-silver text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-primary-foreground text-sm sm:text-base">{t.name}</p>
                <p className="text-steel text-xs sm:text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
