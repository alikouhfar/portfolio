import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hxnwmyrtatlyfzpopwov.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4bndteXJ0YXRseWZ6cG9wd292Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4ODI4MTIsImV4cCI6MjAyMjQ1ODgxMn0.aKld7PL1Ud_3rIgqmIO4SYVWA3LyyckCtQ90Askj8e4";
export const supabase = createClient(supabaseUrl, supabaseKey);
