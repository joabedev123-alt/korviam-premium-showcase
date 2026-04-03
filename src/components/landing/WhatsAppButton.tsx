import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.";

  return (
    <div className="fixed bottom-32 right-8 z-50 flex flex-col items-end group">
      <div className="bg-white text-[#25D366] text-[10px] sm:text-xs font-black px-3 py-1.5 rounded-lg shadow-[0_4px_12px_rgba(37,211,102,0.3)] mb-2 animate-bounce border border-[#25D366]/30 uppercase tracking-wider">
        Fale conosco
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#12883d] rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300 active:scale-95"
        aria-label="Contato via WhatsApp"
      >
        <WhatsAppIcon size={36} color="white" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
