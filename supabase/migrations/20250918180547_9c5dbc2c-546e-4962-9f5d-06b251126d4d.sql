-- Create signatures table
CREATE TABLE public.signatures (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  telefone TEXT NOT NULL,
  email TEXT NOT NULL,
  estado TEXT NOT NULL,
  cidade TEXT NOT NULL,
  whatsapp_authorization BOOLEAN NOT NULL DEFAULT false,
  email_authorization BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.signatures ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (for signature collection)
CREATE POLICY "Allow public to create signatures" 
ON public.signatures 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow public to view signatures (for display purposes)
CREATE POLICY "Allow public to view signatures" 
ON public.signatures 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_signatures_updated_at
BEFORE UPDATE ON public.signatures
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add index for better performance on email lookups
CREATE INDEX idx_signatures_email ON public.signatures(email);
CREATE INDEX idx_signatures_created_at ON public.signatures(created_at DESC);