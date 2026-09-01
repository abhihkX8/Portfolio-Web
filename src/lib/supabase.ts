import { createClient } from "@supabase/supabase-js";

/**
 * Browser-safe Supabase client using the public anon key.
 *
 * This key is intentionally public — it's designed to be exposed in
 * frontend code. Row Level Security (see supabase/contact_messages.sql)
 * is what actually restricts what this client is allowed to do, not the
 * secrecy of this key.
 *
 * NEVER import a service-role key into any file under src/ — that key
 * bypasses RLS entirely and must only ever be used in a trusted server
 * environment (which this project does not currently have; the contact
 * form writes directly from the browser under an INSERT-only RLS policy).
 */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Thrown only as a console warning, so the rest of the app (which doesn't
  // touch Supabase) — including `next build`'s static prerendering — keeps
  // working even before env vars are configured. Actual Supabase calls will
  // fail at request time with a clear error until real values are set.
  console.warn(
    "Supabase env vars are missing. Set NEXT_PUBLIC_SUPABASE_URL and " +
      "NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local — see .env.example."
  );
}

// createClient() throws synchronously on an empty/invalid URL, which would
// otherwise crash `next build` before env vars are ever set. Fall back to a
// syntactically-valid placeholder so the module can load; real requests
// against it will simply fail (caught by the Contact form's try/catch).
export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-anon-key"
);
