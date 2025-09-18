import { AlertTriangle, Users, Shield, Gavel } from "lucide-react";

export function PECProblems() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Histórico Assombrosso",
      description: "Entre 1988 e 2001, quando a blindagem existia, foram registrados mais de 250 casos de crimes cometidos por deputados. O Congresso autorizou processo contra apenas UM."
    },
    {
      icon: Shield,
      title: "Protege Crimes Hediondos",
      description: "A PEC blinda parlamentares mesmo de crimes não relacionados com o cargo, como estupros, violência doméstica e feminicídio."
    },
    {
      icon: Users,
      title: "Aliança com Crime Organizado",
      description: "A PEC protege políticos envolvidos com organizações criminosas, criando um escudo legal para corrupção e lavagem de dinheiro."
    },
    {
      icon: Gavel,
      title: "Como se Fosse o PCC",
      description: "É como se para processar alguém do PCC, a investigação tivesse que ser autorizada pela própria cúpula do PCC. Uma aberração jurídica."
    }
  ];

  return (
    <section id="problemas-pec" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Por que a PEC da Blindagem é um Perigo?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma análise dos problemas graves que essa proposta trará para a democracia brasileira
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-8 shadow-card hover:shadow-dramatic transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              A PEC da Blindagem transforma o Congresso numa zona livre de justiça
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Enquanto o povo brasileiro sofre com violência, corrupção e falta de serviços básicos, 
              os parlamentares querem se blindar da lei. Isso é inaceitável.
            </p>
            <div className="bg-secondary/20 rounded-lg p-4 border-l-4 border-secondary">
              <p className="text-foreground font-semibold">
                "Entre 1988 e 2001: mais de 250 crimes, apenas 1 processo autorizado pelo Congresso"
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Fonte: G1 - Análise histórica sobre o período de blindagem anterior
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}