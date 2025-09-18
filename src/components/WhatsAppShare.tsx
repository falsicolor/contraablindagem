import { Button } from "@/components/ui/button";
import { Share, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function WhatsAppShare() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleWhatsAppShare = () => {
    const message = encodeURIComponent("Assinei o Brasil que Trabalha: corta privilégios no topo pra investir no básico. Assina também? " + window.location.origin + " #BrasilQueTrabalha");
    window.open(`https://wa.me/?text=${message}`, '_blank');
    
    // Tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_share_click', {
        event_category: 'engagement',
        event_label: 'share_section'
      });
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      
      toast({
        title: "Link copiado!",
        description: "Agora é só colar e compartilhar",
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível copiar o link",
        variant: "destructive"
      });
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-secondary rounded-full flex items-center justify-center text-4xl animate-pulse-green">
              📢
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Compartilhe o movimento
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Quanto mais gente souber, mais força teremos para mudar o Brasil
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-card">
            <div className="bg-muted rounded-lg p-4 mb-6 text-left">
              <p className="text-sm text-muted-foreground mb-2">Mensagem sugerida:</p>
              <p className="text-foreground font-medium leading-relaxed">
                "Assinei o Brasil que Trabalha: corta privilégios no topo pra investir no básico. 
                Assina também? {window.location.origin} #BrasilQueTrabalha"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleWhatsAppShare}
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold flex-1 sm:flex-none"
              >
                <Share className="w-5 h-5 mr-2" />
                Compartilhar no WhatsApp
              </Button>

              <Button
                onClick={handleCopyLink}
                variant="outline"
                size="lg"
                className="font-semibold flex-1 sm:flex-none"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 mr-2 text-secondary" />
                    Link copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5 mr-2" />
                    Copiar link
                  </>
                )}
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              Ajude a espalhar: cada compartilhamento fortalece nossa voz
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}