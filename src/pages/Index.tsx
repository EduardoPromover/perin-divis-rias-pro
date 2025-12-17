import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { EleganciaSection } from '@/components/EleganciaSection';
import { TecnologiaSection } from '@/components/TecnologiaSection';
import { BeneficiosSection } from '@/components/BeneficiosSection';
import { InformacoesSection } from '@/components/InformacoesSection';
import { B2BSection } from '@/components/B2BSection';
import { ContatoSection } from '@/components/ContatoSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <EleganciaSection />
      <TecnologiaSection />
      <BeneficiosSection />
      <InformacoesSection />
      <B2BSection />
      <ContatoSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
