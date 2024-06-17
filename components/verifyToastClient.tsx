"use client";

import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { useEffect } from "react";

export default function VerifyToastClient() {
  const searchParams = useSearchParams();
  const message = searchParams.get("message");

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        if (message.includes("Error")) {
          toast.error(message);
        } else {
          toast.success(message);
        }
      }, 100);
    }
  }, [message]);

  // This is to keep typescript happy, needs refactoring in the future.
  return <></>;
}
