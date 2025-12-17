import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const applications = [
  'Escritórios corporativos',
  'Clínicas e consultórios',
  'Lojas e comércios',
  'Escolas e universidades',
  'Salas de reunião',
  'Hotéis e pousadas',
  'Academias',
  'Centros de convenções',
  'Restaurantes e cafés',
  'Garagens e hangares',
  'Estufas agrícolas',
];

const specifications = [
  { label: 'Comprimentos disponíveis', value: 'Peças de 6 metros' },
  { label: 'Largura', value: '200mm' },
  { label: 'Peso aproximado', value: '5kg/m²' },
  { label: 'Tipo de encaixe', value: 'Sistema macho/fêmea' },
  { label: 'Impermeabilidade', value: '100% impermeável' },
  { label: 'Embalagem padrão', value: '4 peças por pacote' },
  { label: 'Aplicabilidade', value: 'Áreas internas' },
];

export const InformacoesSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="informacoes" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Informações
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Especificações técnicas e{' '}
            <span className="text-primary">aplicações</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Applications */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" />
              Indicado para
            </h3>
            <div className="flex flex-wrap gap-2">
              {applications.map((app) => (
                <span
                  key={app}
                  className="bg-background text-foreground px-4 py-2 rounded-full text-sm font-medium border border-border hover:border-primary hover:bg-primary/5 transition-colors cursor-default"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Specifications Table */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" />
              Informações do Produto
            </h3>
            <div className="bg-background rounded-2xl overflow-hidden border border-border">
              <table className="w-full">
                <tbody>
                  {specifications.map((spec, index) => (
                    <tr
                      key={spec.label}
                      className={`${
                        index !== specifications.length - 1 ? 'border-b border-border' : ''
                      }`}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-muted-foreground bg-secondary/50">
                        {spec.label}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-foreground">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button
            variant="cta"
            size="xl"
            onClick={() => scrollToSection('#contato')}
            className="group"
          >
            Quero especificação técnica + condições B2B
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
