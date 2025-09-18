export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Política de Privacidade — Contra A Blindagem
            </h1>
            <p className="text-muted-foreground">
              Vigente a partir de 18/09/2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Quem somos</h2>
              <p className="text-muted-foreground leading-relaxed">
                "Contra A Blindagem" é uma iniciativa cívica supra-partidária, sem fins lucrativos e <strong>sem CNPJ</strong>, criada para mobilizar cidadãos contra a "PEC da Blindagem". Esta política explica como tratamos seus dados pessoais ao assinar o manifesto.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Dados que coletamos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Ao assinar o manifesto, coletamos:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Nome</strong></li>
                <li><strong>Telefone</strong></li>
                <li><strong>E-mail</strong></li>
                <li><strong>UF</strong></li>
                <li><strong>Cidade</strong></li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Não coletamos dados pessoais sensíveis. A assinatura pode indicar apoio à causa, mas não pedimos filiação partidária nem outras categorias sensíveis.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Finalidades de uso</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Usamos seus dados para:</p>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                <li><strong>Registrar sua assinatura</strong> e evitar duplicidades.</li>
                <li><strong>Comunicar atualizações</strong> sobre a campanha.</li>
                <li><strong>Organizar mobilização por território</strong> (UF/Cidade) e produzir estatísticas agregadas.</li>
                <li><strong>Entregar o abaixo-assinado</strong> a autoridades/imprensa, preferindo dados agregados e anonimizados.</li>
              </ol>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Bases legais</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Consentimento</strong> (art. 7º, I, LGPD).</li>
                <li><strong>Legítimo interesse</strong> (art. 7º, IX), com minimização de dados. Você pode se opor a qualquer momento pelos canais indicados na página do manifesto.</li>
              </ul>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Compartilhamento</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Podemos compartilhar dados <strong>estritamente necessários</strong> com:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Provedores de tecnologia</strong> (hospedagem, e-mail/WhatsApp, formulários) como <strong>operadores</strong>.</li>
                <li><strong>Autoridades públicas e parlamentares</strong>, excepcionalmente, para comprovar apoio ao manifesto, priorizando dados agregados.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>Não vendemos seus dados.</strong>
              </p>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Armazenamento e segurança</h2>
              <p className="text-muted-foreground leading-relaxed">
                Adotamos medidas técnicas e administrativas razoáveis para proteger os dados. O armazenamento pode ocorrer em nuvem, inclusive fora do Brasil, com salvaguardas contratuais e padrões amplamente aceitos.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Retenção</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mantemos os dados <strong>pelo tempo necessário</strong> à campanha e eventuais obrigações correlatas. Encerrada a finalidade, <strong>eliminaremos</strong> ou <strong>anonimizaremos</strong> os dados, salvo conservação exigida por lei ou para defesa de direitos.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Menores de idade</h2>
              <p className="text-muted-foreground leading-relaxed">
                A assinatura deve ser feita por <strong>maiores de 16 anos</strong>. Se identificarmos assinatura de menor sem responsável, adotaremos medidas para exclusão dos dados.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Alterações desta política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta política para refletir melhorias, mudanças legais ou operacionais. A versão atualizada será publicada na página do manifesto, com <strong>data de vigência</strong>. Mudanças relevantes poderão requerer <strong>novo consentimento</strong>.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8 border-2 border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">Resumo prático</h3>
              <p className="text-muted-foreground leading-relaxed">
                Coletamos <strong>nome, telefone, e-mail, UF e cidade</strong> para registrar sua assinatura, comunicar novidades e organizar a mobilização. <strong>Não vendemos</strong> seus dados. Preferimos divulgar <strong>dados agregados</strong> e <strong>anonimizados</strong>.
              </p>
            </section>
          </div>

          <div className="text-center mt-12">
            <a 
              href="/" 
              className="inline-flex items-center text-primary hover:underline font-semibold"
            >
              ← Voltar para a página principal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}