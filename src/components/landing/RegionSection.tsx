import { MapPin } from "lucide-react";

const RegionSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-left">
            <p className="text-navy-light uppercase tracking-[0.2em] text-sm font-semibold mb-4">Região de Atendimento</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Atendemos todo o estado de São Paulo
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Com base em Campinas, a Korviam Alumínio atende projetos em todo o estado de São Paulo, 
              oferecendo agilidade no atendimento e logística eficiente para obras de qualquer porte.
            </p>
            <div className="flex items-center gap-3 text-foreground">
              <MapPin size={20} className="text-navy-light" />
              <span className="font-medium">Campinas, São Paulo — Brasil</span>
            </div>
          </div>
          <div className="reveal-right">
            <div className="rounded-sm overflow-hidden shadow-xl h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117563.75951489988!2d-47.13123655!3d-22.90556145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c8f6a2552649%3A0x1e99164890ad570b!2sCampinas%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Korviam Alumínio - Campinas, SP"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionSection;
