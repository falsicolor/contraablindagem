-- Critical security fix: Remove public SELECT access to signatures
DROP POLICY IF EXISTS "Allow public to view signatures" ON public.signatures;

-- Add unique constraint to prevent duplicate email submissions
ALTER TABLE public.signatures 
ADD CONSTRAINT IF NOT EXISTS unique_email_signature UNIQUE (email);