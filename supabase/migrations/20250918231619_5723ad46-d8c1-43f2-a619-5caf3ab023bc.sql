-- Create a public function to get signature count (safe to expose)
CREATE OR REPLACE FUNCTION public.get_signature_count()
RETURNS bigint
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT COUNT(*) FROM public.signatures;
$$;