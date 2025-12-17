import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Building2, Factory, Calendar, Package } from 'lucide-react';
import heroImage from '@/assets/hero-divisorias.jpg';

const badges = [
  { icon: Calendar, text: 'Desde 1999' },
  { icon: Factory, text: 'Fabricação própria' },
  { icon: Package, text: 'Linha completa Perin' },
  { icon: Building2, text: 'Atendimento B2B' },
];

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Divisórias em PVC Perin"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/80 to-accent/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20 pb-16">
        <div className="max-w-3xl">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6 animate-fade-in-up">
            {badges.map((badge, index) => (
              <Badge
                key={badge.text}
                variant="secondary"
                className={`bg-primary/20 text-primary-foreground border-primary/30 px-3 py-1.5 animation-delay-${index * 100}`}
              >
                <badge.icon className="w-3.5 h-3.5 mr-1.5" />
                {badge.text}
              </Badge>
            ))}
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up animation-delay-100">
            Divisórias em PVC Perin para{' '}
            <span className="text-primary">Revenda e Distribuição</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl font-medium mt-2 text-primary-foreground/90">
              — padrão, resistência e giro
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in-up animation-delay-200">
            Para distribuidores, lojas de materiais e depósitos que precisam de fornecedor 
            confiável, condições competitivas e prazos consistentes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up animation-delay-300">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection('#contato')}
              className="group"
            >
              Solicitar Tabela B2B e Catálogo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollToSection('#contato')}
            >
              Quero ser Representante
            </Button>
          </div>

          {/* B2B Note */}
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg px-4 py-3 animate-fade-in-up animation-delay-400">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-orange" />
            <p className="text-sm text-primary-foreground/90">
              <strong>Atenção:</strong> Se você é consumidor final, procure um revendedor. 
              Esta página é exclusiva para <strong>parceiros B2B</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
