import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.";

  return (
    <div className="fixed bottom-10 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-20 h-20 bg-[#25D366] hover:bg-[#12883d] rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-300 active:scale-95"
        aria-label="Contato via WhatsApp"
      >
        <WhatsAppIcon size={52} color="white" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
