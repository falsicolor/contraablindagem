import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "O que é a PEC da Blindagem?",
      answer: "É uma Proposta de Emenda à Constituição aprovada pela Câmara em setembro de 2025 que dificulta a abertura de processos criminais contra parlamentares, ampliando o controle político sobre investigações e reforçando o foro privilegiado."
    },
    {
      question: "Por que é chamada de 'PEC da Blindagem'?",
      answer: "Porque cria uma blindagem legal que protege deputados e senadores de investigações criminais, exigindo autorização do próprio Congresso para que sejam processados - mesmo por crimes comuns como estupro e violência doméstica."
    },
    {
      question: "Qual o histórico quando essa blindagem existiu antes?",
      answer: "Entre 1988 e 2001, quando havia blindagem similar, foram registrados mais de 250 casos de crimes cometidos por deputados. O Congresso autorizou processo contra apenas UM parlamentar. Uma taxa de impunidade de 99,6%."
    },
    {
      question: "A PEC protege apenas crimes relacionados ao mandato?",
      answer: "NÃO. A PEC blinda parlamentares até de crimes comuns como estupro, violência doméstica, feminicídio, tráfico de drogas e ligações com crime organizado - crimes que nada têm a ver com o exercício do mandato."
    },
    {
      question: "Como funciona essa 'autorização' do Congresso?",
      answer: "É como se para processar um membro do PCC, você precisasse da autorização da própria cúpula do PCC. Os parlamentares decidem se seus colegas podem ou não ser investigados - um sistema de proteção mútua."
    },
    {
      question: "Esta campanha tem lado político?",
      answer: "NÃO. Esta é uma campanha apartidária pela democracia e estado de direito. Políticos de todos os partidos votaram a favor da PEC, e cidadãos de todas as orientações políticas devem se opor a ela."
    },
    {
      question: "O que acontece com minha assinatura?",
      answer: "Sua assinatura será contabilizada e pode ser usada em manifestações públicas, petições ao Senado e campanhas de conscientização. Seus dados são protegidos pela LGPD e você pode cancelar a qualquer momento."
    },
    {
      question: "Como posso ajudar além de assinar?",
      answer: "Compartilhe nas redes sociais, converse com amigos e família, entre em contato com senadores do seu estado e participe de manifestações pacíficas. A pressão popular é fundamental para barrar essa aberração no Senado."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Dúvidas sobre a PEC da Blindagem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Entenda os perigos dessa proposta e como ela afeta a democracia brasileira
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6 border border-border shadow-card">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}