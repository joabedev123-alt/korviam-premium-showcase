import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const projects = [
  { image: portfolio1, title: "Residência Alto Padrão", category: "Residencial" },
  { image: portfolio2, title: "Fachada Corporativa", category: "Comercial" },
  { image: portfolio3, title: "Terraço Panorâmico", category: "Residencial" },
  { image: portfolio4, title: "Escritório Executivo", category: "Corporativo" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-platinum">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-navy-light uppercase tracking-[0.2em] text-sm font-semibold mb-4">Portfólio</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Projetos Realizados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Conheça alguns dos projetos que demonstram nosso padrão de qualidade e excelência técnica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div key={i} className={`reveal delay-${(i % 2 + 1) * 100} group relative overflow-hidden rounded-sm`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div>
                  <span className="text-silver text-sm uppercase tracking-wider">{project.category}</span>
                  <h3 className="font-serif text-2xl font-semibold text-primary-foreground">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
