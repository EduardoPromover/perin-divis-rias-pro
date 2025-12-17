import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const whatsappNumber = '5511999999999';
  const message = encodeURIComponent(
    'Olá! Vim pelo site e gostaria de saber mais sobre as condições B2B para divisórias em PVC.\n\n' +
    'Minha cidade/UF: \n' +
    'Segmento: \n' +
    'Tipo de interesse: (Revenda / Representação)'
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <div className="relative">
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30" />
        
        {/* Button */}
        <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-elevated hover:scale-110 transition-transform duration-300">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-card pointer-events-none">
          Fale pelo WhatsApp
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="border-8 border-transparent border-l-accent" />
          </div>
        </div>
      </div>
    </a>
  );
};
