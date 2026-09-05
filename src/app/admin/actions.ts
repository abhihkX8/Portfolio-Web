"use server";

import { createHmac } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE_NAME = "admin_session";

function sessionToken() {
  return createHmac(
    "sha256",
    process.env.ADMIN_PASSWORD ?? ""
  )
    .update("admin-session")
    .digest("hex");
}

export async function login(formData: FormData) {
  const password = String(formData.get("password") ?? "");

  if (!process.env.ADMIN_PASSWORD) {
    console.error("ADMIN_PASSWORD is not set in .env.local");
    return;
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    console.log(
      "Login attempt failed: password did not match ADMIN_PASSWORD"
    );
    return;
  }

  (await cookies()).set(COOKIE_NAME, sessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  redirect("/admin");
}

export async function logout() {
  (await cookies()).delete(COOKIE_NAME);
  redirect("/admin");
}

export async function isAuthenticated() {
  const cookie = (await cookies()).get(COOKIE_NAME)?.value;

  return Boolean(cookie) && cookie === sessionToken();
}