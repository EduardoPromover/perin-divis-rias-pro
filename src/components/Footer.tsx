import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <span className="text-2xl font-bold mb-4 block">
              <span className="text-primary">Perin</span>Plásticos
            </span>
            <p className="text-accent-foreground/70 text-sm mb-4">
              Fabricação própria de divisórias em PVC desde 1999. 
              Qualidade, durabilidade e condições especiais para parceiros B2B.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-accent-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-accent-foreground/70">
              <p>Av. Industrial, 1500</p>
              <p>São Paulo - SP, 00000-000</p>
              <p className="pt-2">
                <a href="tel:+551144445555" className="hover:text-primary transition-colors">
                  (11) 4444-5555
                </a>
              </p>
              <p>
                <a href="mailto:comercial@perinplasticos.com.br" className="hover:text-primary transition-colors">
                  comercial@perinplasticos.com.br
                </a>
              </p>
            </div>
          </div>

          {/* B2B Notice */}
          <div>
            <h4 className="font-semibold mb-4">Aviso Importante</h4>
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
              <p className="text-sm text-accent-foreground/90">
                <strong className="text-primary">Atendimento exclusivo B2B.</strong>
                <br />
                Atendemos revendedores, distribuidores, construtoras e representantes. 
                <strong className="text-primary"> Não vendemos varejo.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-accent-foreground/60">
              © {new Date().getFullYear()} Perin Plásticos. Todos os direitos reservados.
            </p>
            <p className="text-xs text-accent-foreground/40">
              CNPJ: 00.000.000/0001-00
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
