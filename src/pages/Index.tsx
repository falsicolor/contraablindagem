import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { PECProblems } from "@/components/PECProblems";
import { WhatsAppShare } from "@/components/WhatsAppShare";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { SEOHead } from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const [variant, setVariant] = useState<'A' | 'B'>('A');
  const [totalSignatures, setTotalSignatures] = useState<number | string>("Muitos");

  useEffect(() => {
    // A/B Testing - 50/50 split
    const savedVariant = localStorage.getItem('ab-variant');
    let currentVariant: 'A' | 'B';
    
    if (savedVariant && (savedVariant === 'A' || savedVariant === 'B')) {
      currentVariant = savedVariant;
      setVariant(savedVariant);
    } else {
      currentVariant = Math.random() < 0.5 ? 'A' : 'B';
      setVariant(currentVariant);
      localStorage.setItem('ab-variant', currentVariant);
    }

    // Fetch real signature count from database
    const fetchSignatureCount = async () => {
      try {
        const { data, error } = await supabase.rpc('get_signature_count');
        if (!error && data !== null) {
          setTotalSignatures(Number(data));
        } else {
          // Fallback to default count if fetch fails
          setTotalSignatures("Muitos");
        }
      } catch (error) {
        console.log('Error fetching signature count:', error);
        setTotalSignatures("Muitos");
      }
    };

    fetchSignatureCount();

    // Tracking do experimento A/B
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ab_test_view', {
        event_category: 'experiment',
        event_label: `variant_${currentVariant}`,
        custom_parameter_1: currentVariant
      });
    }
  }, []);

  const handleSignatureSuccess = (newTotal: number) => {
    setTotalSignatures(newTotal);
    
    // Tracking da conversão
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'lead_submit', {
        event_category: 'conversion',
        event_label: `variant_${variant}`,
        value: 1
      });
    }
  };

  return (
    <>
      <Analytics />
      <SEOHead variant={variant} />
      <div className="min-h-screen bg-background">
        <Hero 
          variant={variant} 
          totalSignatures={totalSignatures}
          onSuccess={handleSignatureSuccess}
        />
        <SocialProof />
        <PECProblems />
        <WhatsAppShare />
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default Index;
