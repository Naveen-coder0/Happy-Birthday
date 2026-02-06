-- Create guestbook messages table for birthday wishes
CREATE TABLE public.guestbook_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  emoji TEXT DEFAULT '💝',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.guestbook_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read messages (public guestbook)
CREATE POLICY "Anyone can view guestbook messages" 
ON public.guestbook_messages 
FOR SELECT 
USING (true);

-- Allow anyone to insert messages (no auth required for birthday guestbook)
CREATE POLICY "Anyone can add guestbook messages" 
ON public.guestbook_messages 
FOR INSERT 
WITH CHECK (true);

-- Enable realtime for guestbook messages
ALTER PUBLICATION supabase_realtime ADD TABLE public.guestbook_messages;