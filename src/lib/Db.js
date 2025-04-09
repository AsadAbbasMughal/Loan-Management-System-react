// src/lib/Supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://apdptjqwdurjbyprmphv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwZHB0anF3ZHVyamJ5cHJtcGh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwNDkzNzEsImV4cCI6MjA1OTYyNTM3MX0.z3M5wOjZrp_4bBgScUXnbro4tzdhMCliQFYmc0tkTxI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
