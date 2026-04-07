import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/5519995781860?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.";

  return (
    <>
      {/* Botão flutuante — desktop */}
      <div className="hidden sm:block fixed bottom-8 right-6 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#25D366] hover:bg-[#12883d] rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-300 active:scale-95"
          aria-label="Contato via WhatsApp"
        >
          <WhatsAppIcon size={40} color="white" />
        </a>
      </div>

      {/* Barra sticky mobile — aparece apenas em telas pequenas */}
      <div
        className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-md border-t border-white/10"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="flex">
          <a
            href="tel:+5519995781860"
            className="flex-1 flex flex-col items-center justify-center py-3 gap-0.5 text-silver hover:text-white hover:bg-white/10 transition-colors border-r border-white/10"
            aria-label="Ligar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.64 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span className="text-[10px] font-medium">Ligar</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[2] flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#12883d] text-white font-black text-sm transition-colors active:scale-95"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon size={22} color="white" />
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;
