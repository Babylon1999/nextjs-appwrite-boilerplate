"use client";
import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";
import { useFormStatus } from "react-dom";

export function FormStatus() {
  const { pending } = useFormStatus();
  return pending;
}
export function LoginSubmitButton() {
  return (
    <Button type="submit" className="w-full">
      Login {FormStatus() === true && <Spinner size="sm" />}
    </Button>
  );
}

export function ChangePasswordSubmitButton() {
  return (
    <Button type="submit">
      Change Password {FormStatus() === true && <Spinner size="sm" />}
    </Button>
  );
}

export function SignUpSubmitButton() {
  return (
    <Button type="submit" className="w-full">
      Sign up {FormStatus() === true && <Spinner size="sm" />}
    </Button>
  );
}
