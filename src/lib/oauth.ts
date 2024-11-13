"use server";

import { createAdminClient } from "@/lib/appwrite";
import { redirect } from "next/navigation";
import { OAuthProvider } from "node-appwrite";

const origin = "https://astro-colab.vercel.app";
console.log("origin fron env", origin);

export async function signUpWithGithub() {
  const { account } = await createAdminClient();
  const redirectUrl = await account.createOAuth2Token(
    OAuthProvider.Github,
    `${origin}/oauth`,
    `${origin}/sign-up`
  );

  return redirect(redirectUrl);
}

export async function signUpWithGoogle() {
  const { account } = await createAdminClient();

  const redirectUrl = await account.createOAuth2Token(
    OAuthProvider.Google,
    `${origin}/oauth`,
    `${origin}/sign-up`
  );

  return redirect(redirectUrl);
}
