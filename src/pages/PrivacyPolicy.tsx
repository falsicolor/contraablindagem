export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Política de Privacidade
            </h1>
            <p className="text-muted-foreground">
              Última atualização: dezembro de 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Quem somos</h2>
              <p className="text-muted-foreground leading-relaxed">
                O Brasil que Trabalha é um movimento suprapartidário que tem como objetivo promover 
                maior transparência e eficiência no uso dos recursos públicos, com foco na aplicação 
                do teto constitucional e no fortalecimento dos serviços básicos.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Dados coletados</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Coletamos os seguintes dados:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Dados obrigatórios:</strong> Nome completo, telefone (WhatsApp) e e-mail</li>
                <li><strong>Dados opcionais:</strong> Cidade e UF</li>
                <li><strong>Preferências de comunicação:</strong> Consentimento para WhatsApp e e-mail</li>
                <li><strong>Dados técnicos:</strong> IP (hash), user agent, parâmetros UTM</li>
              </ul>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Finalidade e base legal</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos seus dados com base no <strong>consentimento</strong> (Art. 7º, I da LGPD) para:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Registrar seu apoio ao movimento Brasil que Trabalha</li>
                <li>Demonstrar força popular da campanha através de contadores públicos</li>
                <li>Enviar atualizações sobre o andamento do movimento (apenas se consentir)</li>
                <li>Análises estatísticas agregadas e anônimas</li>
              </ul>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Compartilhamento</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Não vendemos nem compartilhamos</strong> seus dados pessoais com terceiros. 
                Dados agregados e anônimos podem ser divulgados publicamente para demonstrar 
                o alcance do movimento (ex: "15.000 pessoas de 500 cidades já aderiram").
              </p>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Armazenamento e retenção</h2>
              <p className="text-muted-foreground leading-relaxed">
                Seus dados são armazenados em serviços seguros (Google Sheets com criptografia) 
                e serão mantidos enquanto a campanha estiver ativa. Após o encerramento, dados 
                pessoais serão anonimizados ou excluídos, mantendo apenas estatísticas agregadas.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Seus direitos (LGPD)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Você tem direito a:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Acesso:</strong> Saber quais dados temos sobre você</li>
                <li><strong>Retificação:</strong> Corrigir dados incorretos</li>
                <li><strong>Exclusão:</strong> Solicitar remoção dos seus dados</li>
                <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                <li><strong>Revogação:</strong> Cancelar comunicações a qualquer momento</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Para exercer esses direitos, envie e-mail para: 
                <a href="mailto:privacidade@brasilquetrabalha.com.br" className="text-primary hover:underline ml-1">
                  privacidade@brasilquetrabalha.com.br
                </a>
              </p>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Segurança</h2>
              <p className="text-muted-foreground leading-relaxed">
                Adotamos medidas técnicas e organizacionais para proteger seus dados contra 
                acesso não autorizado, perda ou vazamento. Isso inclui criptografia, 
                controle de acesso e monitoramento de segurança.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Alterações</h2>
              <p className="text-muted-foreground leading-relaxed">
                Esta política pode ser atualizada. Mudanças significativas serão comunicadas 
                através dos canais de contato fornecidos por você.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para dúvidas sobre privacidade: 
                <a href="mailto:privacidade@brasilquetrabalha.com.br" className="text-primary hover:underline ml-1">
                  privacidade@brasilquetrabalha.com.br
                </a>
                <br />
                Para assuntos gerais: 
                <a href="mailto:contato@brasilquetrabalha.com.br" className="text-primary hover:underline ml-1">
                  contato@brasilquetrabalha.com.br
                </a>
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