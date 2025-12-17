import { Shield, Droplets, Wrench, Thermometer, Leaf, BadgeCheck } from 'lucide-react';
import pvcProfile from '@/assets/pvc-profile-detail.jpg';

const features = [
  {
    icon: Shield,
    title: 'Resistência a Impactos',
    description: 'Material robusto que suporta o uso intensivo do dia a dia sem deformações.',
  },
  {
    icon: Droplets,
    title: 'Impermeável',
    description: '100% impermeável, ideal para ambientes úmidos como banheiros e cozinhas.',
  },
  {
    icon: Wrench,
    title: 'Instalação Simplificada',
    description: 'Sistema de encaixe macho/fêmea que acelera a montagem e reduz custos.',
  },
  {
    icon: Thermometer,
    title: 'Isolamento Térmico/Acústico',
    description: 'Proporciona conforto ambiental com isolamento eficiente.',
  },
  {
    icon: Leaf,
    title: 'Sustentável',
    description: 'Material reciclável e longa vida útil para menor impacto ambiental.',
  },
  {
    icon: BadgeCheck,
    title: 'Garantia Perin',
    description: 'Fabricação própria com controle de qualidade e garantia de fábrica.',
  },
];

export const TecnologiaSection = () => {
  return (
    <section id="tecnologia" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
              Tecnologia
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Tecnologia Perin: divisórias{' '}
              <span className="text-primary">leves, resistentes</span> e fáceis de instalar
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Nossa linha de divisórias em PVC combina engenharia avançada com praticidade. 
              Cada peça é fabricada com rigoroso controle de qualidade para garantir 
              durabilidade e desempenho superior.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 p-4 bg-background rounded-xl hover:shadow-card transition-all duration-300 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={pvcProfile}
                alt="Detalhe do perfil PVC Perin"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-orange">
              <div className="text-4xl font-bold">25+</div>
              <div className="text-sm opacity-90">Anos de experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
