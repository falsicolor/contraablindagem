import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, CheckCircle2, Share, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SignatureFormProps {
  variant: 'A' | 'B';
  onSuccess: (newTotal: number) => void;
}

interface FormData {
  nome: string;
  telefone: string;
  email: string;
  cidade?: string;
  uf?: string;
  optinWhatsApp?: boolean;
  optinEmail?: boolean;
  consentimentoLGPD: boolean;
  // Honeypot anti-bot
  website?: string;
}

const estados = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS',
  'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

const formContent = {
  A: {
    cta: "Assinar contra a PEC da Blindagem"
  },
  B: {
    cta: "Rejeitar a PEC da Blindagem"
  }
};

export function SignatureForm({ variant, onSuccess }: SignatureFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    telefone: '',
    email: '',
    cidade: '',
    uf: '',
    optinWhatsApp: false,
    optinEmail: false,
    consentimentoLGPD: false,
    website: '' // Honeypot
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const content = formContent[variant];

  // Máscara para telefone brasileiro
  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const disposableEmails = ['10minutemail', 'guerrillamail', 'tempmail', 'throwaway'];
    const isDisposable = disposableEmails.some(domain => email.includes(domain));
    return emailRegex.test(email) && !isDisposable;
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (formData.nome.length < 3) {
      newErrors.nome = 'Nome deve ter pelo menos 3 caracteres';
    }

    const phoneNumbers = formData.telefone.replace(/\D/g, '');
    if (phoneNumbers.length < 10 || phoneNumbers.length > 11) {
      newErrors.telefone = 'Confira seu número de WhatsApp';
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'E-mail inválido ou de domínio temporário';
    }

    if (!formData.consentimentoLGPD) {
      newErrors.consentimentoLGPD = 'É necessário aceitar os termos' as any;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Proteção anti-bot (honeypot)
    if (formData.website) {
      toast({
        title: "Erro de validação",
        description: "Por favor, tente novamente.",
        variant: "destructive"
      });
      return;
    }
    
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Rate limiting por IP (simulado)
      const lastSubmit = localStorage.getItem('lastSubmit');
      const now = Date.now();
      if (lastSubmit && (now - parseInt(lastSubmit)) < 30000) { // 30 segundos
        throw new Error('Aguarde um pouco antes de enviar novamente');
      }
      
      // Coletar dados UTM
      const urlParams = new URLSearchParams(window.location.search);
      const submitData = {
        ...formData,
        timestamp: new Date().toISOString(),
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_content: urlParams.get('utm_content') || '',
        user_agent: navigator.userAgent,
        ip_hash: 'hashed_ip', // Seria processado no backend
        variant: variant
      };

      // Aqui seria feita a integração real com Google Sheets/Webhook
      console.log('Dados para envio:', submitData);
      
      // Simular envio
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Salvar timestamp do envio
      localStorage.setItem('lastSubmit', now.toString());
      
      // Incrementar contador (simulado)
      const newTotal = Math.floor(Math.random() * 1000) + 15000;
      
      setIsSuccess(true);
      onSuccess(newTotal);
      
      toast({
        title: "Obrigado por assinar!",
        description: "Você está lutando contra a blindagem de criminosos no poder.",
      });

      // Tracking da conversão bem-sucedida
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
          value: 1.0,
          currency: 'BRL'
        });
      }

    } catch (error) {
      console.error('Erro no envio:', error);
      toast({
        title: "Erro",
        description: error instanceof Error ? error.message : "Tente novamente em alguns instantes.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppShare = () => {
    const message = encodeURIComponent("Assinei contra a PEC da Blindagem que protege criminosos no Congresso. Assina também! " + window.location.origin + " #NãoÀPECDaBlindagem");
    window.open(`https://wa.me/?text=${message}`, '_blank');
    
      // Tracking do compartilhamento
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'whatsapp_share_click', {
          event_category: 'engagement',
          event_label: 'success_page'
        });
      }
  };

  const handleDownloadCard = () => {
    // Placeholder para gerar card 1080x1080
    toast({
      title: "Card em desenvolvimento",
      description: "Em breve você poderá baixar seu card personalizado!",
    });
  };

  if (isSuccess) {
    return (
      <div className="text-center space-y-6 animate-scale-in">
        <div className="w-16 h-16 bg-success-gradient rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Obrigado por assinar!
          </h3>
          <p className="text-muted-foreground text-lg">
            Você está lutando contra a blindagem no Congresso.
          </p>
        </div>

        <div className="space-y-3">
          <Button
            onClick={handleWhatsAppShare}
            className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold"
            size="lg"
          >
            <Share className="w-5 h-5 mr-2" />
            Compartilhar no WhatsApp
          </Button>

          <Button
            onClick={handleDownloadCard}
            variant="outline"
            className="w-full"
            size="lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Baixar card
          </Button>
        </div>

        <div className="bg-muted rounded-lg p-4">
          <p className="text-sm text-muted-foreground mb-2">
            Contador atualizado:
          </p>
          <p className="font-bold text-lg text-foreground">
            15.247 pessoas já assinaram
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" id="signature-form">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Rejeite a PEC da Blindagem
        </h3>
        <p className="text-muted-foreground">
          Una-se a milhares de brasileiros contra a impunidade
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="nome" className="text-sm font-medium text-foreground">
            Nome completo *
          </Label>
          <Input
            id="nome"
            type="text"
            value={formData.nome}
            onChange={(e) => setFormData(prev => ({ ...prev, nome: e.target.value }))}
            className={`mt-1 ${errors.nome ? 'border-destructive' : ''}`}
            placeholder="Seu nome completo"
            required
          />
          {errors.nome && <p className="text-destructive text-xs mt-1">{errors.nome}</p>}
        </div>

        <div>
          <Label htmlFor="telefone" className="text-sm font-medium text-foreground">
            Telefone (WhatsApp) *
          </Label>
          <Input
            id="telefone"
            type="tel"
            value={formData.telefone}
            onChange={(e) => setFormData(prev => ({ ...prev, telefone: formatPhone(e.target.value) }))}
            className={`mt-1 ${errors.telefone ? 'border-destructive' : ''}`}
            placeholder="(11) 99999-9999"
            required
          />
          {errors.telefone && <p className="text-destructive text-xs mt-1">{errors.telefone}</p>}
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium text-foreground">
            E-mail *
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className={`mt-1 ${errors.email ? 'border-destructive' : ''}`}
            placeholder="seu.email@exemplo.com"
            required
          />
          {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="uf" className="text-sm font-medium text-foreground">
              Estado
            </Label>
            <Select value={formData.uf} onValueChange={(value) => setFormData(prev => ({ ...prev, uf: value }))}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="UF" />
              </SelectTrigger>
              <SelectContent>
                {estados.map(estado => (
                  <SelectItem key={estado} value={estado}>
                    {estado}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="cidade" className="text-sm font-medium text-foreground">
              Cidade
            </Label>
            <Input
              id="cidade"
              type="text"
              value={formData.cidade}
              onChange={(e) => setFormData(prev => ({ ...prev, cidade: e.target.value }))}
              className="mt-1"
              placeholder="Sua cidade"
            />
          </div>
        </div>

        {/* Honeypot - Campo invisível para detectar bots */}
        <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
          <Label htmlFor="website">Website (não preencha este campo)</Label>
          <Input
            id="website"
            type="text"
            value={formData.website}
            onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="optin-whatsapp"
              checked={formData.optinWhatsApp}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, optinWhatsApp: !!checked }))}
            />
            <Label htmlFor="optin-whatsapp" className="text-sm text-foreground leading-relaxed">
              Quero receber atualizações pelo WhatsApp
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="optin-email"
              checked={formData.optinEmail}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, optinEmail: !!checked }))}
            />
            <Label htmlFor="optin-email" className="text-sm text-foreground leading-relaxed">
              Quero receber atualizações por e-mail
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="lgpd"
              checked={formData.consentimentoLGPD}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consentimentoLGPD: !!checked }))}
              className={errors.consentimentoLGPD ? 'border-destructive' : ''}
            />
            <Label htmlFor="lgpd" className="text-sm text-foreground leading-relaxed">
              Autorizo o uso dos meus dados para esta campanha, nos termos da{' '}
              <a href="/politica-privacidade" className="text-primary hover:underline">
                Política de Privacidade
              </a>
              , podendo revogar a qualquer momento. *
            </Label>
          </div>
          {errors.consentimentoLGPD && <p className="text-destructive text-xs">{errors.consentimentoLGPD}</p>}
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isLoading}
        className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold text-lg py-6 shadow-button hover:shadow-button-hover transition-all duration-300 disabled:opacity-50"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Enviando assinatura...
          </>
        ) : (
          content.cta
        )}
      </Button>

    </form>
  );
}