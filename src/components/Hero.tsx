import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SignatureForm } from "./SignatureForm";

interface HeroProps {
  variant: 'A' | 'B';
  totalSignatures: number | string;
  onSuccess: (newTotal: number) => void;
}

const heroContent = {
  A: {
    h1: "CONGRESSO INIMIGO DO POVO",
    h2: "A PEC da Blindagem protege criminosos no poder enquanto o povo sofre. Assine contra essa vergonha nacional.",
    cta: "Assinar contra a PEC da Blindagem"
  },
  B: {
    h1: "NÃO À PEC DA BLINDAGEM",
    h2: "Blindar parlamentares de crimes é blindar a corrupção. Sua assinatura pressiona pelo fim dessa aberração.",
    cta: "Rejeitar a PEC da Blindagem"
  }
};

export function Hero({ variant, totalSignatures, onSuccess }: HeroProps) {
  const [animateCount, setAnimateCount] = useState(false);
  const content = heroContent[variant];

  useEffect(() => {
    setAnimateCount(true);
  }, [totalSignatures]);

  const scrollToForm = () => {
    document.getElementById('signature-form')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Dramatic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      
      {/* Lightning Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-1 h-32 bg-primary animate-lightning transform rotate-12"></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-24 bg-primary animate-lightning transform -rotate-45"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-20 bg-primary animate-lightning transform rotate-45"></div>
      </div>

      {/* Dark Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 rotate-12">⚖️</div>
        <div className="absolute top-32 right-16 w-16 h-16 -rotate-12">🏛️</div>
        <div className="absolute bottom-40 left-20 w-18 h-18 rotate-45">⛓️</div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rotate-12">🚨</div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          
          {/* Content Column */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-foreground leading-tight mb-6 drop-shadow-lg break-words">
              {content.h1}
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground leading-relaxed mb-8 break-words">
              {content.h2}
            </h2>

            {/* Problems with PEC */}
            <div className="space-y-3 mb-8 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-start gap-3 text-foreground font-medium">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">⚠️</span>
                </div>
                <span className="text-base sm:text-lg leading-snug">Entre 1988-2001: 250+ crimes, apenas 1 processo autorizado</span>
              </div>
              <div className="flex items-start gap-3 text-foreground font-medium">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">⚠️</span>
                </div>
                <span className="text-base sm:text-lg leading-snug">Blinda até estupros e violência doméstica</span>
              </div>
              <div className="flex items-start gap-3 text-foreground font-medium">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">⚠️</span>
                </div>
                <span className="text-base sm:text-lg leading-snug">Protege políticos ligados ao crime organizado</span>
              </div>
            </div>

            {/* Urgent Counter */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <div className={`bg-primary/20 backdrop-blur-sm rounded-full px-3 py-2 border border-primary/30 transition-transform duration-500 ${animateCount ? 'animate-pulse-yellow' : ''}`}>
                <span className="text-primary font-bold text-sm sm:text-base lg:text-lg text-center">
                  {typeof totalSignatures === 'number' 
                    ? `${totalSignatures.toLocaleString('pt-BR')} brasileiros contra a PEC`
                    : `${totalSignatures} brasileiros contra a PEC`
                  }
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-lg shadow-button hover:shadow-button-hover transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                onClick={scrollToForm}
              >
                {content.cta}
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-semibold text-lg px-8 py-6 rounded-lg transition-all duration-300 w-full sm:w-auto"
                onClick={() => document.getElementById('compromisso')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Por que a PEC é perigosa?
              </Button>
            </div>

            {/* Trust Badge */}
            <p className="text-muted-foreground text-sm mt-6 max-w-md mx-auto lg:mx-0">
              Campanha apartidária. Seus dados protegidos pela LGPD.
            </p>
          </div>

          {/* Form Column */}
          <div className="animate-scale-in">
            <div className="bg-card rounded-2xl shadow-card border border-border p-8 max-w-md mx-auto">
              <SignatureForm 
                variant={variant}
                onSuccess={onSuccess}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}