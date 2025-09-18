import { useEffect } from 'react';

interface SEOHeadProps {
  variant?: 'A' | 'B';
}

export function SEOHead({ variant }: SEOHeadProps) {
  useEffect(() => {
    // Structured Data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": variant === 'A' ? "CONGRESSO INIMIGO DO POVO - Rejeite a PEC da Blindagem" : "NÃO À PEC DA BLINDAGEM - Assine contra a impunidade",
      "description": variant === 'A' ? "A PEC da Blindagem protege criminosos no poder. Entre 1988-2001 foram 250+ crimes e apenas 1 processo autorizado. Protege até estupros e crime organizado. Assine contra essa vergonha." : "Blindar parlamentares de crimes é blindar a corrupção. A PEC protege políticos de estupros, violência doméstica e ligações com crime organizado. Sua assinatura pressiona pelo fim dessa aberração.",
      "url": window.location.origin,
      "mainEntity": {
        "@type": "Organization",
        "name": "Campanha Contra a PEC da Blindagem",
        "description": "Campanha apartidária contra a PEC da Blindagem que protege criminosos no Congresso Nacional",
        "url": window.location.origin,
        "sameAs": []
      },
      "potentialAction": {
        "@type": "Action",
        "name": "Assinar contra a PEC da Blindagem",
        "target": window.location.origin + "#signature-form"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Canonical URL
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = window.location.origin;
    document.head.appendChild(canonicalLink);

    // Preload critical resources
    const preloadFont = document.createElement('link');
    preloadFont.rel = 'preload';
    preloadFont.href = 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2';
    preloadFont.as = 'font';
    preloadFont.type = 'font/woff2';
    preloadFont.crossOrigin = 'anonymous';
    document.head.appendChild(preloadFont);

    // Preconnect to external domains
    const preconnects = [
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com',
      'https://connect.facebook.net'
    ];

    preconnects.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });

    // A/B Test meta tag for tracking
    const abTestMeta = document.createElement('meta');
    abTestMeta.name = 'ab-test-variant';
    abTestMeta.content = variant || 'A';
    document.head.appendChild(abTestMeta);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(canonicalLink);
      document.head.removeChild(preloadFont);
      document.head.removeChild(abTestMeta);
      preconnects.forEach(() => {
        const links = document.head.querySelectorAll('link[rel="preconnect"]');
        links.forEach(link => document.head.removeChild(link));
      });
    };
  }, [variant]);

  return null;
}