-- contact_messages
--
-- Stores submissions from the portfolio's Contact section.
-- Run this once in the Supabase SQL Editor (or via `supabase db push`
-- if you're using the CLI + migrations).

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- Speeds up the common "most recent messages first" query if you ever
-- read this table from a trusted (server-side / dashboard) context.
create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);

-- Row Level Security
-- ------------------
-- RLS is OFF by default until explicitly enabled, so this line is required.
alter table public.contact_messages enable row level security;

-- Visitors (the anon/public role, used by the browser's Supabase client)
-- may INSERT new messages...
create policy "Anyone can submit a contact message"
  on public.contact_messages
  for insert
  to anon
  with check (true);

-- ...but must NOT be able to read, update, or delete any row. Since no
-- SELECT / UPDATE / DELETE policy exists for the anon role and RLS is
-- enabled, those operations are denied by default — nothing further is
-- needed to enforce that. (Policies are intentionally not created for
-- those operations; there is no "deny" policy to write.)
