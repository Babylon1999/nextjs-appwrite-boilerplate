"use client";

import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Spacer } from "@nextui-org/spacer";
import { loginWithEmail } from "@/utils/server/appwrite";
import { subtitle } from "@/components/primitives";
import { LoginSubmitButton } from "@/components/SubmitButton";
import { toast } from "sonner";
export default function LoginClientForm() {
  return (
    <div>
      <form
        action={async (formData: FormData) => {
          const res = await loginWithEmail(formData);
          if (res?.error) {
            toast.error(res.error);
          }
        }}
      >
        <Card className="w-full max-w-md">
          <CardHeader>
            <Spacer y={4} />
            <strong className={subtitle()}>Login</strong>
          </CardHeader>

          <CardBody className="space-y-4">
            <div className="space-y-2">
              <Input
                name="email"
                label="Email"
                id="email"
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Input
                name="password"
                label="Password"
                id="password"
                required
                type="password"
              />
            </div>
          </CardBody>
          <CardFooter className="flex flex-col space-y-2">
            <LoginSubmitButton />
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
