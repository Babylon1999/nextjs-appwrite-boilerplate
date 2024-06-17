"use client";

import { verify } from "@/utils/server/appwrite";
import { Button } from "@nextui-org/button";
import { toast } from "sonner";
export default function VerifyFormClient() {
  return (
    <form
      action={async () => {
        const res = await verify();
        if (res?.success) {
          toast.success(res.success);
        }
        if (res?.error) {
          toast.error(res.error);
        }
      }}
    >
      <Button type="submit">Resend Verification Email</Button>
    </form>
  );
}
