import { Building2, Store, Warehouse, Users, Briefcase, CheckCircle2 } from 'lucide-react';

const personas = [
  {
    icon: Building2,
    title: 'Distribuidor / Atacadista',
    description: 'Volume, tabela especial e suporte logístico',
  },
  {
    icon: Store,
    title: 'Lojas de Materiais',
    description: 'Estoque pronto e material de PDV',
  },
  {
    icon: Warehouse,
    title: 'Depósitos',
    description: 'Condições para grande volume e entrega programada',
  },
  {
    icon: Briefcase,
    title: 'Arquitetos e Engenheiros',
    description: 'Especificação técnica e suporte a projetos',
  },
  {
    icon: Users,
    title: 'Representantes Comerciais',
    description: 'Território exclusivo e comissionamento atrativo',
  },
];

const partnerBenefits = [
  'Catálogo B2B completo',
  'Tabela comercial atualizada',
  'Materiais de PDV e marketing',
  'Suporte técnico dedicado',
  'Território exclusivo (representantes)',
  'Treinamento de vendas',
];

export const B2BSection = () => {
  return (
    <section id="b2b" className="py-20 md:py-28 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Parceria B2B
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Condições únicas para B2B:{' '}
            <span className="text-primary">revendedores, distribuidores</span> e representantes
          </h2>
          <p className="text-lg text-accent-foreground/70">
            Seja nosso parceiro e tenha acesso a condições exclusivas, suporte dedicado 
            e uma linha completa de produtos com alta demanda.
          </p>
        </div>

        {/* Persona Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {personas.map((persona, index) => (
            <div
              key={persona.title}
              className="bg-accent-foreground/5 border border-accent-foreground/10 rounded-2xl p-6 hover:bg-primary hover:border-primary transition-all duration-300 group text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-foreground/20 transition-colors">
                <persona.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-accent-foreground mb-2 group-hover:text-primary-foreground transition-colors">
                {persona.title}
              </h3>
              <p className="text-sm text-accent-foreground/60 group-hover:text-primary-foreground/80 transition-colors">
                {persona.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partner Benefits */}
        <div className="bg-accent-foreground/5 border border-accent-foreground/10 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            O que você recebe como <span className="text-primary">parceiro Perin</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {partnerBenefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 bg-background/5 rounded-xl px-4 py-3"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-accent-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
