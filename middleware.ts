import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getLoggedInUser } from "./utils/server/appwrite";

export async function middleware(req: NextRequest) {
  const account = await getLoggedInUser();
  const { pathname } = req.nextUrl;

  if (account) {
    if (!account.emailVerification) {
      return handleUnverifiedUser(req, pathname);
    } else {
      return handleVerifiedUser(req, pathname);
    }
  } else {
    return handleNotLoggedInUser(req, pathname);
  }
}

function handleVerifiedUser(req: NextRequest, pathname: string) {
  if (["/login", "/signup", "/signup/verify"].includes(pathname)) {
    return redirectTo(req, "/dashboard");
  }
  return NextResponse.next();
}

function handleUnverifiedUser(req: NextRequest, pathname: string) {
  if (["/dashboard", "/account"].includes(pathname)) {
    return redirectTo(req, "/signup/verify");
  }
  return NextResponse.next();
}

function handleNotLoggedInUser(req: NextRequest, pathname: string) {
  if (["/account", "/dashboard"].includes(pathname)) {
    return redirectTo(req, "/login");
  }
  return NextResponse.next();
}

const redirectTo = (req: NextRequest, path: string) =>
  NextResponse.redirect(new URL(path, req.url));

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
