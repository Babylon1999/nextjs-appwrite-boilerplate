"use server";
import { Client, Account, ID } from "node-appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function initializeClient() {
  const endpoint = process.env.APPWRITE_ENDPOINT as string;
  const project = process.env.APPWRITE_PROJECT as string;

  if (!endpoint || !project) {
    throw new Error("Missing required environment variables");
  }

  return new Client().setEndpoint(endpoint).setProject(project);
}

function createAccount(client: Client) {
  return new Account(client);
}

async function getSession() {
  const session = cookies().get("appwrite-auth-cookie");
  if (!session || !session.value) {
    throw new Error("No session");
  }
  return session.value;
}

export async function createSessionClient() {
  "use server";
  const client = initializeClient();
  client.setSession(await getSession());

  return {
    get account() {
      return createAccount(client);
    },
  };
}

export async function createNewClient() {
  "use server";
  const client = initializeClient();

  return {
    get account() {
      return createAccount(client);
    },
  };
}

export async function createSessionForVerify(userID: string, secret: string) {
  "use server";
  const { account } = await createNewClient();
  await account.updateVerification(userID, secret);
}

export async function createAdminClient() {
  const client = initializeClient();
  const key = process.env.APPWRITE_KEY as string;

  if (!key) {
    throw new Error("Missing required environment variables");
  }

  client.setKey(key);

  return {
    get account() {
      return createAccount(client);
    },
  };
}

export async function signOut() {
  "use server";
  const session = cookies().get("appwrite-auth-cookie");
  if (!session || !session.value) {
    return;
  }
  const { account } = await createSessionClient();
  cookies().delete("appwrite-auth-cookie");
  await account.deleteSession("current");
  redirect("/login");
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}

export async function user() {
  const user = await getLoggedInUser();
  return { ...user };
}

export async function verify() {
  "use server";
  const { account } = await createSessionClient();
  try {
    await account.createVerification(
      (process.env.WEBSITE_URL as string) + "/verify-callback",
    );
    return {
      success:
        "Verification email sent. Please check your email inbox and click the link. You'll need to refresh this page after doing so.",
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
}

export async function signUpWithEmail(formData: FormData) {
  "use server";

  const email = formData.get("email");
  const password = formData.get("password");
  const name = formData.get("name");

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof name !== "string"
  ) {
    throw new Error("Email, password, and name must be strings");
  }

  const { account } = await createAdminClient();

  try {
    await account.create(ID.unique(), email, password, name);
    const session = await account.createEmailPasswordSession(email, password);
    cookies().set("appwrite-auth-cookie", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    verify();
  } catch (error: any) {
    if (error.type === "user_already_exists") {
      return {
        error: "User already exists",
      };
    } else {
      return {
        error: error.message,
      };
    }
  }
  redirect("/signup/verify");
}

export async function loginWithEmail(formData: any) {
  "use server";

  const email = formData.get("email");
  const password = formData.get("password");

  const { account } = await createAdminClient();

  try {
    const session = await account.createEmailPasswordSession(email, password);
    cookies().set("appwrite-auth-cookie", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
  redirect("/dashboard");
}

export async function updatePassword(formData: any) {
  "use server";

  const currentPassword = formData.get("current-password");
  const newPassword = formData.get("new-password");
  const newPasswordConfirm = formData.get("confirm-password");

  if (newPassword !== newPasswordConfirm) {
    return {
      error: "Passwords do not match.",
    };
  }

  const { account } = await createSessionClient();

  try {
    await account.updatePassword(newPassword, currentPassword);
    return {
      success: "Password Updated",
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
}
