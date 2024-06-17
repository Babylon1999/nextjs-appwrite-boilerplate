"use client";

import { CardHeader, CardBody, CardFooter, Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { updatePassword } from "@/utils/server/appwrite";
import { ChangePasswordSubmitButton } from "@/components/SubmitButton";
import { toast } from "sonner";
export default function PassWordUpdateForm() {
  return (
    <Card>
      <form
        action={async (formData: FormData) => {
          const res = await updatePassword(formData);
          if (res?.success) {
            toast.success(res.success);
          }
          if (res?.error) {
            toast.error(res.error);
          }
        }}
      >
        <CardHeader>
          <h1>Change Password</h1>
        </CardHeader>

        <CardBody className="space-y-4">
          <div className="space-y-2">
            <Input
              required={true}
              name="current-password"
              id="current-password"
              placeholder="Enter your current password"
              type="password"
            />
          </div>
          <div className="space-y-2">
            <Input
              required={true}
              name="new-password"
              id="new-password"
              placeholder="Enter your new password"
              type="password"
            />
          </div>
          <div className="space-y-2">
            <Input
              required={true}
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirm your new password"
              type="password"
            />
          </div>
        </CardBody>
        <CardFooter>
          <ChangePasswordSubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
}
