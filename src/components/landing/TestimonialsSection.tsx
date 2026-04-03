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
    <section className="py-24 lg:py-32 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-silver uppercase tracking-[0.2em] text-sm font-semibold mb-4">Depoimentos</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className={`reveal delay-${(i + 1) * 100} p-8 rounded-sm border border-primary-foreground/10 bg-primary-foreground/5`}>
              <Quote size={32} className="text-navy-light mb-6 opacity-50" />
              <p className="text-silver leading-relaxed mb-8 italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-primary-foreground">{t.name}</p>
                <p className="text-steel text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
