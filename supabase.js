import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// Supabase credentials
const supabaseUrl = "https://jjqmkcqlexuxsnufxdza.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqcW1rY3FsZXh1eHNudWZ4ZHphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMDI4NjgsImV4cCI6MjA1NjU3ODg2OH0.WiSDgGj3aAhaenCjs1-tZAPsKQA3ByOMgNTQoiWtJes"
// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Export Supabase client
export { supabase };