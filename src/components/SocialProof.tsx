import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function SocialProof() {
  const scrollToProblemas = () => {
    document.getElementById('problemas-pec')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que a PEC da Blindagem é perigosa?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entenda os principais riscos que essa proposta representa para a democracia brasileira
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Card 1 - Histórico de Impunidade */}
          <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card-gradient border border-border">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/20 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                📊
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Histórico Assombrosso
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Entre 1988-2001: mais de 250 crimes cometidos por deputados, mas o Congresso autorizou processo contra apenas UM.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 - Protege Crimes Hediondos */}
          <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card-gradient border border-border">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/20 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                🚫
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Blinda Crimes Hediondos
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A PEC protege parlamentares até de estupros, violência doméstica e feminicídio - crimes que nada têm a ver com o mandato.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 - Crime Organizado */}
          <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card-gradient border border-border">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/20 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                ⛓️
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Proteção ao Crime Organizado
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                É como se para processar alguém do PCC, você precisasse da autorização da própria cúpula do PCC.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToProblemas}
            variant="outline"
            size="lg"
            className="font-semibold text-foreground border-foreground hover:bg-foreground hover:text-background"
          >
            Ver todos os problemas da PEC
          </Button>
        </div>
      </div>
    </section>
  );
}