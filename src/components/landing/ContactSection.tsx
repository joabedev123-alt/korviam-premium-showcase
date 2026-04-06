import { useState, FormEvent } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({ nome: "", telefone: "", email: "", mensagem: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({ nome: "", telefone: "", email: "", mensagem: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="contato" className="py-16 sm:py-24 lg:py-32 bg-platinum">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Info */}
          <div>
            <p className="text-navy-light uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold mb-4">Contato</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Fale com a nossa equipe
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-8">
              Preencha o formulário ou entre em contato diretamente por um dos nossos canais.
              Responderemos em até 24 horas úteis.
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, label: "Telefone / WhatsApp", value: "(19) 0000-0000" },
                { icon: Mail,  label: "E-mail",              value: "contato@korviam.com.br" },
                { icon: MapPin, label: "Localização",        value: "Campinas, São Paulo" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-navy flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{label}</p>
                    <p className="text-sm sm:text-base font-medium text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulário */}
          <div>
            <form onSubmit={handleSubmit} className="bg-card p-5 sm:p-8 rounded-sm shadow-xl space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-2">Nome completo</label>
                <input
                  id="nome" type="text" required maxLength={100}
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-navy transition text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-foreground mb-2">Telefone</label>
                <input
                  id="telefone" type="tel" required maxLength={20}
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-navy transition text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">E-mail</label>
                <input
                  id="email" type="email" required maxLength={255}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-navy transition text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-foreground mb-2">Mensagem</label>
                <textarea
                  id="mensagem" required maxLength={1000} rows={4}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-navy transition resize-none text-sm sm:text-base"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-navy text-primary-foreground font-semibold rounded-sm hover:bg-navy-light transition-colors duration-300 disabled:opacity-50 text-sm sm:text-base"
              >
                <Send size={18} />
                {loading ? "Enviando..." : "Enviar mensagem"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
