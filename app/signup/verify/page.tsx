import { getLoggedInUser } from "@/utils/server/appwrite";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { redirect } from "next/navigation";
import VerifyFormClient from "@/components/VerifyFormClient";
export default async function VerifyPage() {
  const account = await getLoggedInUser();

  if (account?.emailVerification === false) {
    return (
      <>
        <div className="w-96 flex justify-center items-center min-h-full max-sm:p-2">
          <Card className="w-full max-w-lg p-6 shadow-lg">
            <CardHeader>
              <h2 className="text-2xl font-bold text-center">
                Verify Your Email
              </h2>
            </CardHeader>
            <CardBody>
              <p className="text-center">
                You should have received an email with a verification link.
                Please click on the link to verify your email address.
              </p>
            </CardBody>
            <CardFooter className="flex justify-center">
              <VerifyFormClient />
            </CardFooter>
          </Card>
        </div>
      </>
    );
  } else {
    redirect("/");
  }
}
