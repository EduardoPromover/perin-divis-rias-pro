import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const businessTypes = [
  { value: 'representante', label: 'Representante Comercial' },
  { value: 'revendedor', label: 'Revendedor / Distribuidor' },
  { value: 'loja', label: 'Loja de Materiais' },
  { value: 'deposito', label: 'Depósito' },
  { value: 'construtora', label: 'Construtora' },
  { value: 'outro', label: 'Outro' },
];

const estados = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
  'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
  'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

export const ContatoSection = () => {
  const [businessType, setBusinessType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.');
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
    setBusinessType('');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Fale com o <span className="text-primary">Comercial Perin</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Preencha o formulário e nossa equipe entrará em contato para apresentar 
            as melhores condições para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-secondary rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefone</p>
                    <p className="font-medium text-foreground">(11) 4444-5555</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">E-mail</p>
                    <p className="font-medium text-foreground">comercial@perinplasticos.com.br</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Endereço</p>
                    <p className="font-medium text-foreground">Av. Industrial, 1500 - São Paulo/SP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* B2B Notice */}
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
              <p className="text-sm text-foreground">
                <strong className="text-primary">Atendimento exclusivo B2B.</strong>
                <br />
                Não vendemos para varejo ou consumidor final. Se você é consumidor final, 
                procure um de nossos revendedores autorizados.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-secondary rounded-2xl p-6 md:p-8 space-y-6">
              {/* Business Type */}
              <div className="space-y-2">
                <Label htmlFor="businessType">Você é: *</Label>
                <Select value={businessType} onValueChange={setBusinessType} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione seu segmento" />
                  </SelectTrigger>
                  <SelectContent>
                    {businessTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo *</Label>
                  <Input id="name" placeholder="Seu nome" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa *</Label>
                  <Input id="company" placeholder="Nome da empresa" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp *</Label>
                  <Input id="whatsapp" placeholder="(00) 00000-0000" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cidade">Cidade *</Label>
                  <Input id="cidade" placeholder="Sua cidade" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="estado">UF *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {estados.map((uf) => (
                        <SelectItem key={uf} value={uf}>
                          {uf}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Conditional Fields for Representatives */}
              {businessType === 'representante' && (
                <div className="bg-background/50 rounded-xl p-4 space-y-4 border border-border">
                  <p className="text-sm font-medium text-primary">Informações para Representantes</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="regioes">Cidades/Estados de atuação</Label>
                      <Input id="regioes" placeholder="Ex: Grande SP, Interior de MG" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cnae">CNAE principal</Label>
                      <Input id="cnae" placeholder="Ex: 4612-5/00" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="carteira">Descreva sua carteira atual</Label>
                    <Textarea id="carteira" placeholder="Segmentos atendidos, principais clientes..." rows={3} />
                  </div>
                </div>
              )}

              {/* Conditional Fields for Resellers/Distributors */}
              {(businessType === 'revendedor' || businessType === 'loja' || businessType === 'deposito') && (
                <div className="bg-background/50 rounded-xl p-4 space-y-4 border border-border">
                  <p className="text-sm font-medium text-primary">Informações para Revenda</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="estoque">Capacidade de estoque</Label>
                      <Input id="estoque" placeholder="Ex: 500 peças/mês" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mixpvc">Já trabalha com PVC?</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sim">Sim, já trabalho</SelectItem>
                          <SelectItem value="nao">Não, seria novidade</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="canais">Canais de venda</Label>
                    <Textarea id="canais" placeholder="Loja física, e-commerce, televendas..." rows={2} />
                  </div>
                </div>
              )}

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem (opcional)</Label>
                <Textarea 
                  id="message" 
                  placeholder="Conte-nos mais sobre seu interesse..."
                  rows={4}
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                variant="cta"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    Enviar e falar com o Comercial
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
