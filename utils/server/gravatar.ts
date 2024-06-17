"use server";

import { createHash } from "crypto";
import { getLoggedInUser } from "./appwrite";

interface User {
  email: string;
}

export async function getGravatarUrl() {
  const user: User | null = await getLoggedInUser();

  if (!user) {
    throw new Error("User not logged in");
  }

  const trimmedEmail = user.email.trim().toLowerCase();
  const hash = createHash("md5").update(trimmedEmail).digest("hex");

  return `https://www.gravatar.com/avatar/${hash}?s=${80}&d=identicon`;
}
