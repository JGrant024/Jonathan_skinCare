import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SOURCE_URL;

const key = import.meta.env.VITE_SOURCE_KEY;

const supabase = createClient(url, key);

export default supabase;
