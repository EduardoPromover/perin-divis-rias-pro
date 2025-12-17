import aplicacaoClinica from '@/assets/aplicacao-clinica.jpg';
import aplicacaoEscritorio from '@/assets/aplicacao-escritorio.jpg';
import aplicacaoEscola from '@/assets/aplicacao-escola.jpg';

const images = [
  { src: aplicacaoClinica, alt: 'Divisórias PVC em clínicas', label: 'Clínicas e Consultórios' },
  { src: aplicacaoEscritorio, alt: 'Divisórias PVC em escritórios', label: 'Escritórios Corporativos' },
  { src: aplicacaoEscola, alt: 'Divisórias PVC em escolas', label: 'Instituições de Ensino' },
];

export const EleganciaSection = () => {
  return (
    <section id="elegancia" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Elegância
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ambientes bem divididos, obra rápida e{' '}
            <span className="text-primary">manutenção mínima</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ofereça aos seus clientes corporativos uma solução completa: divisórias que transformam 
            espaços com instalação ágil, durabilidade comprovada e visual profissional. O argumento 
            de venda perfeito para clínicas, escritórios e escolas que buscam eficiência e economia.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.label}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elevated transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold">
                  {image.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-secondary rounded-2xl p-6 hover:shadow-card transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🏥</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Clínicas e Hospitais</h3>
            <p className="text-sm text-muted-foreground">
              Privacidade e higiene em ambientes de saúde com fácil limpeza e manutenção.
            </p>
          </div>
          <div className="bg-secondary rounded-2xl p-6 hover:shadow-card transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🏢</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Escritórios Modernos</h3>
            <p className="text-sm text-muted-foreground">
              Flexibilidade para criar layouts dinâmicos com visual contemporâneo.
            </p>
          </div>
          <div className="bg-secondary rounded-2xl p-6 hover:shadow-card transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Escolas e Universidades</h3>
            <p className="text-sm text-muted-foreground">
              Divisões resistentes para ambientes educacionais de alto tráfego.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
