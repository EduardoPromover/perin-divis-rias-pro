import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Elegância', href: '#elegancia' },
  { label: 'Tecnologia', href: '#tecnologia' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Informações', href: '#informacoes' },
  { label: 'B2B', href: '#b2b' },
  { label: 'Contato', href: '#contato' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold">
              <span className="text-primary">Perin</span>
              <span className={isScrolled ? 'text-foreground' : 'text-foreground'}>Plásticos</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-primary/10 hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection('#contato')}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-primary/10"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-card animate-fade-in">
            <nav className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="hero"
                className="mt-3"
                onClick={() => scrollToSection('#contato')}
              >
                Fale Conosco
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
