export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Brasil que Trabalha</h3>
              <p className="text-lg font-medium opacity-90">
                "Preço no bolso. Fila andando. Lei pra todos."
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a 
                href="/politica-privacidade" 
                className="hover:text-secondary transition-colors underline"
              >
                Política de Privacidade
              </a>
              <a 
                href="/termos" 
                className="hover:text-secondary transition-colors underline"
              >
                Termos de Uso
              </a>
              <a 
                href="mailto:contato@brasilquetrabalha.com.br" 
                className="hover:text-secondary transition-colors underline"
              >
                Contato
              </a>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-6 text-center">
            <p className="text-sm opacity-75">
              Brasil que Trabalha • #BrasilQueTrabalha
            </p>
            <p className="text-xs opacity-60 mt-2">
              © 2024 - Movimento suprapartidário por um Brasil mais justo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}