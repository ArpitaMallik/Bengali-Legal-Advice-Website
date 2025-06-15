import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://jylgeskzqpyyhhsvfprx.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5bGdlc2t6cXB5eWhoc3ZmcHJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2NjcwMDMsImV4cCI6MjA2NTI0MzAwM30.Ws020j2kIjx-3t-kau19nHNn1h61rQFgtiAbP_h50UI"

const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;