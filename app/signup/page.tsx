import Link from "next/link";
import { Spacer } from "@nextui-org/spacer";
import SignUpClientForm from "@/components/SignUpClientForm";

export default function SignUp() {
  return (
    <div className="w-96 min-h-full pt-14 p-5">
      <Spacer y={1.5} />
      <SignUpClientForm />
      <div className="mt-4">
        <span className="text-sm">Already have an account? </span>
        <Link className="text-sm text-blue-500" href="/login">
          Login
        </Link>
      </div>
    </div>
  );
}
