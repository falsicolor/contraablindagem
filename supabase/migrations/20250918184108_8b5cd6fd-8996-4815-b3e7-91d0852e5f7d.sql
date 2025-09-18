-- Remove the current public SELECT policy that exposes all data
DROP POLICY IF EXISTS "Allow public to view signatures" ON public.signatures;

-- Keep public INSERT for signature collection
-- (the existing "Allow public to create signatures" policy is fine)

-- Create admin-only SELECT policy (will work after authentication is implemented)
CREATE POLICY "Admin can view all signatures" 
ON public.signatures 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() AND role = 'admin'
  )
);

-- Create profiles table for admin management
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  email TEXT,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Allow users to view and update their own profile
CREATE POLICY "Users can view own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Allow anyone to insert their profile (for registration)
CREATE POLICY "Users can create own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Add trigger for updating updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Add rate limiting table to prevent spam
CREATE TABLE IF NOT EXISTS public.signature_rate_limits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  ip_address INET,
  last_submission TIMESTAMP WITH TIME ZONE DEFAULT now(),
  submission_count INTEGER DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on rate limits (admin only)
ALTER TABLE public.signature_rate_limits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin can manage rate limits" 
ON public.signature_rate_limits 
FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() AND role = 'admin'
  )
);

-- Add unique constraint to prevent duplicate emails in signatures
ALTER TABLE public.signatures 
ADD CONSTRAINT unique_email_signature UNIQUE (email);