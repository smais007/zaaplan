"use server";

import { createAdminClient } from "@/lib/appwrite";
import { redirect } from "next/navigation";
import { OAuthProvider } from "node-appwrite";

const origin = process.env.NEXT_PUBLIC_APP_URL;

export async function signUpWithGithub() {
  const { account } = await createAdminClient();
  const redirectUrl = await account.createOAuth2Token(
    OAuthProvider.Github,
    `${origin}/oauth`,
    `${origin}/sign-up`
  );

  console.log("Callback url from oauth", `${origin}/oauth`);

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
