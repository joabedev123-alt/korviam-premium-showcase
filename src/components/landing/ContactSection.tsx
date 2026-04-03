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
    <section id="contato" className="py-24 lg:py-32 bg-platinum">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="reveal-left">
            <p className="text-navy-light uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mb-4">Contato</p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Fale com a nossa equipe
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              Preencha o formulário ou entre em contato diretamente por um dos nossos canais. 
              Responderemos em até 24 horas úteis.
            </p>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-sm bg-navy flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground">Telefone / WhatsApp</p>
                  <p className="text-sm md:text-base font-medium text-foreground">(19) 0000-0000</p>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-sm bg-navy flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground">E-mail</p>
                  <p className="text-sm md:text-base font-medium text-foreground">contato@korviam.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-sm bg-navy flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground">Localização</p>
                  <p className="text-sm md:text-base font-medium text-foreground">Campinas, São Paulo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-right mt-10 lg:mt-0">
            <form onSubmit={handleSubmit} className="bg-card p-6 md:p-8 rounded-sm shadow-xl space-y-5">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-2">Nome completo</label>
                <input
                  id="nome"
                  type="text"
                  required
                  maxLength={100}
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-navy transition"
                />
              </div>
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-foreground mb-2">Telefone</label>
                <input
                  id="telefone"
                  type="tel"
                  required
                  maxLength={20}
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-navy transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">E-mail</label>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-navy transition"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-foreground mb-2">Mensagem</label>
                <textarea
                  id="mensagem"
                  required
                  maxLength={1000}
                  rows={4}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-navy transition resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-navy text-primary-foreground font-semibold rounded-sm hover:bg-navy-light transition-colors duration-300 disabled:opacity-50"
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
