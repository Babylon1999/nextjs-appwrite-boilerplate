import Link from "next/link";
import { signOut, getLoggedInUser } from "@/utils/server/appwrite";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import { Button } from "@nextui-org/button";
import { DesktopAvatar } from "./DesktopAvatar";

export async function LogOutComponentForMobile() {
  const loggedInUser = await getLoggedInUser();
  const user = loggedInUser ? loggedInUser.user : null;

  return user !== null ? (
    <div className="flex gap-4 justify-between items-center ml-auto">
      <form action={signOut}>
        <button className={clsx(linkStyles({ color: "danger" }))} type="submit">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <div className="flex gap-4 justify-between items-center ml-auto">
      <Link
        className={clsx(linkStyles({ color: "secondary" }))}
        color="foreground"
        href={"/login"}
      >
        Login
      </Link>
    </div>
  );
}

export async function AuthStatusButton() {
  const loggedInUser = await getLoggedInUser();
  const user = loggedInUser ? loggedInUser.user : null;

  return user !== null ? (
    <div className="flex gap-4 justify-between items-center ml-auto">
      <DesktopAvatar />
    </div>
  ) : (
    <Link href="/login">
      <Button>Login</Button>
    </Link>
  );
}
