import { VerifyUserEmailLink } from "@/utils/server/appwrite";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  const UserID = request.nextUrl.searchParams.get("userId");
  const secret = request.nextUrl.searchParams.get("secret");

  if (UserID !== null && secret !== null) {
    try {
      await VerifyUserEmailLink(UserID, secret);
      return NextResponse.redirect(
        new URL("/login?message=Account+Verified", request.url),
      );
    } catch (error) {
      return NextResponse.redirect(
        new URL("/login?message=Error:" + error, request.url),
      );
    }
  }
}
