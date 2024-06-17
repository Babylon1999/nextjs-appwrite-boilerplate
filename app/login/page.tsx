import Link from "next/link";
import LoginClientForm from "@/components/LoginClientForm";
import VerifyToastClient from "@/components/verifyToastClient";
import { Suspense } from "react";

export default function Login() {
  return (
    <div className="w-96 min-h-full pt-14 p-5">
      <LoginClientForm />
      <Suspense>
        <VerifyToastClient />
      </Suspense>
      <div className="mt-4">
        <span className="text-sm">Don&apos;t have an account? </span>
        <Link className="text-sm text-blue-500" href="/signup">
          Sign up
        </Link>
      </div>
    </div>
  );
}
