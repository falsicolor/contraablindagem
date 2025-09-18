export function Compromisso() {
  return (
    <section id="compromisso" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O compromisso completo
            </h2>
            <p className="text-lg text-muted-foreground">
              Três pontos fundamentais para um Brasil que funciona
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-xl p-8 shadow-card border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">1️⃣</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Teto constitucional respeitado
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Acabar com supersalários, auxílios excessivos e penduricalhos que burlam o teto constitucional. 
                    Ninguém no serviço público pode ganhar mais que um ministro do STF. Regra é regra, sem exceções.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-card border-l-4 border-secondary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">2️⃣</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Recursos direcionados ao básico
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    O dinheiro economizado vai direto para saúde, educação, segurança e infraestrutura. 
                    Mais médicos, professores bem pagos, escolas equipadas e segurança pública eficiente.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-card border-l-4 border-accent">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">3️⃣</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Transparência e fiscalização
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Contracheques públicos para todos os cargos acima de R$ 10 mil. Portais de transparência 
                    funcionais e fiscalização cidadã. O povo tem direito de saber como seu dinheiro é gasto.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-muted rounded-lg p-6">
              <p className="text-foreground font-semibold text-lg mb-2">
                "Preço no bolso. Fila andando. Lei pra todos."
              </p>
              <p className="text-muted-foreground">
                Brasil que Trabalha • #BrasilQueTrabalha
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}