import { Droplet, Settings, Hammer, Flame, RefreshCw, Bug } from 'lucide-react';

const benefits = [
  {
    icon: Droplet,
    title: 'Não absorve umidade',
    description: '100% impermeável para qualquer ambiente',
  },
  {
    icon: Settings,
    title: 'Baixa manutenção',
    description: 'Limpeza simples com pano úmido',
  },
  {
    icon: Hammer,
    title: 'Fácil instalação',
    description: 'Encaixe macho/fêmea sem ferramentas especiais',
  },
  {
    icon: Flame,
    title: 'Anti-chamas',
    description: 'Material autoextinguível para segurança',
  },
  {
    icon: RefreshCw,
    title: 'Reutilizável',
    description: 'Desmonte e remonte em novos layouts',
  },
  {
    icon: Bug,
    title: 'Imune a pragas',
    description: 'Não atrai cupins ou outros insetos',
  },
];

export const BeneficiosSection = () => {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Benefícios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Benefícios que facilitam a venda e{' '}
            <span className="text-primary">reduzem dor de cabeça</span> na obra
          </h2>
          <p className="text-lg text-muted-foreground">
            Argumentos sólidos para seus vendedores e menos chamados de suporte para você.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative bg-secondary rounded-2xl p-6 hover:bg-primary hover:shadow-orange transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-foreground/10 transition-colors" />
              
              <div className="relative">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-foreground/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary-foreground transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-accent text-accent-foreground rounded-full px-6 py-3">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium">
              Material de apoio disponível para revendedores autorizados
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
