import { supabaseAdmin } from "@/lib/supabase-admin";
import { isAuthenticated, login, logout } from "./actions";

export const dynamic = "force-dynamic";
export const metadata = { robots: { index: false, follow: false } };

export default async function AdminPage() {
  const authed = await isAuthenticated();

  if (!authed) {
    return (
      <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-6">
        <h1 className="mb-6 text-xl font-semibold text-ink-primary">Admin Login</h1>
        <form action={login} className="space-y-4">
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            className="w-full rounded-lg border border-base-border bg-base-bg/60 px-4 py-2.5 text-sm text-ink-primary"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-signal-sky px-4 py-2.5 text-sm font-medium text-base-bg"
          >
            Log in
          </button>
        </form>
      </main>
    );
  }

  const { data: messages, error } = await supabaseAdmin
    .from("contact_messages")
    .select("id, name, email, message, created_at")
    .order("created_at", { ascending: false });

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-ink-primary">Contact Messages</h1>
        <form action={logout}>
          <button type="submit" className="text-sm text-ink-secondary underline">
            Log out
          </button>
        </form>
      </div>

      {error ? (
        <p className="text-sm text-red-400">Failed to load messages: {error.message}</p>
      ) : messages?.length === 0 ? (
        <p className="text-sm text-ink-secondary">No messages yet.</p>
      ) : (
        <div className="space-y-4">
          {messages?.map((m) => (
            <div key={m.id} className="rounded-xl border border-base-border bg-base-surface/50 p-5">
              <div className="flex items-baseline justify-between">
                <span className="font-medium text-ink-primary">{m.name}</span>
                <span className="text-xs text-ink-muted">
                  {new Date(m.created_at).toLocaleString()}
                </span>
              </div>
              <a href={`mailto:${m.email}`} className="text-xs text-signal-sky">
                {m.email}
              </a>
              <p className="mt-3 text-sm text-ink-secondary">{m.message}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}