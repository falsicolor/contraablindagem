// Configurações para integrações externas

export interface LeadData {
  timestamp: string;
  nome: string;
  telefone: string;
  email: string;
  cidade?: string;
  uf?: string;
  optin_whatsapp: boolean;
  optin_email: boolean;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  user_agent: string;
  ip_hash: string;
  variant: 'A' | 'B';
}

// Google Sheets Integration
export async function sendToGoogleSheets(data: LeadData) {
  const SHEETS_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
  
  try {
    const response = await fetch(SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao enviar para Google Sheets:', error);
    throw error;
  }
}

// Webhook Integration (Make/Zapier)
export async function sendToWebhook(data: LeadData) {
  const WEBHOOK_URL = 'YOUR_WEBHOOK_URL_HERE';
  
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: 'new_signature',
        data: data,
        timestamp: Date.now()
      }),
    });

    if (!response.ok) {
      throw new Error(`Webhook error! status: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error('Erro no webhook:', error);
    // Não falha silenciosamente - webhook é secundário
    return false;
  }
}

// Hash IP para privacidade (simulado)
export function hashIP(ip: string): string {
  // Em produção, usar uma função de hash real no backend
  return btoa(ip).substring(0, 10);
}

// Validação de domínios de email descartáveis
export const DISPOSABLE_EMAIL_DOMAINS = [
  '10minutemail.com',
  'guerrillamail.com',
  'tempmail.org',
  'throwaway.email',
  'mailinator.com',
  'temp-mail.org'
];

export function isDisposableEmail(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase();
  return DISPOSABLE_EMAIL_DOMAINS.some(disposable => 
    domain?.includes(disposable)
  );
}

/*
INSTRUÇÕES PARA IMPLEMENTAÇÃO:

1. GOOGLE SHEETS INTEGRATION:
   - Criar um Google Apps Script
   - Conectar com uma planilha do Google Sheets
   - Configurar as colunas conforme LeadData interface
   - Gerar URL do script e substituir em SHEETS_URL

2. WEBHOOK INTEGRATION:
   - Configurar webhook no Make.com ou Zapier
   - Adicionar a URL do webhook em WEBHOOK_URL
   - Configurar automações (email, CRM, etc.)

3. ANALYTICS:
   - Substituir GA_MEASUREMENT_ID no Analytics.tsx
   - Configurar Meta Pixel ID se necessário
   - Configurar Google Ads Conversion ID se necessário

4. PLANILHA MODELO (Google Sheets):
   Colunas: timestamp | nome | telefone | email | cidade | uf | 
            optin_whatsapp | optin_email | utm_source | utm_medium | 
            utm_campaign | utm_content | user_agent | ip_hash | variant

5. SEGURANÇA:
   - Implementar rate limiting real no backend
   - Usar HTTPS sempre
   - Configurar CORS adequadamente
   - Implementar validação server-side
*/