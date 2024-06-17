"use client";
import Link from "next/link";
import React from "react";
import { signUpWithEmail } from "@/utils/server/appwrite";
import { SignUpSubmitButton } from "@/components/SubmitButton";
import { Input } from "@nextui-org/input";
import { Spacer } from "@nextui-org/spacer";
import { subtitle } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { toast } from "sonner";
export default function SignUpClientForm() {
  return (
    <form
      action={async (formData: FormData) => {
        const res = await signUpWithEmail(formData);
        if (res?.error) {
          toast.error(res.error);
        }
      }}
    >
      <Card className="w-full max-w-md">
        <Spacer y={4} />
        <strong className={subtitle()}>Create an account</strong>
        <Spacer y={4} />

        <CardBody className="space-y-4">
          <Input
            name="name"
            label="Full Name"
            id="name"
            placeholder="John Doe"
            required
            type="text"
          />
          <Input
            name="email"
            label="Email"
            id="email"
            placeholder="m@example.com"
            required
            type="email"
          />

          <Input
            placeholder="Minimum of 8 characters"
            name="password"
            label="Password"
            id="password"
            required
            type="password"
          />
        </CardBody>
        <CardFooter className="flex flex-col space-y-2">
          <SignUpSubmitButton />
        </CardFooter>
      </Card>
    </form>
  );
}
