import { CardBody, CardFooter, Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { getLoggedInUser } from "@/utils/server/appwrite";
import { ProfileAvatar } from "@/components/DesktopAvatar";
import AccountPageSidebar from "@/components/AccountPageSidebar";
export default async function AccountPage() {
  const user = await getLoggedInUser();

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <AccountPageSidebar />
      {/* Main Content */}
      <div className="flex-1 lg:border-l  max-sm:pb-12">
        <main className="flex-1 overflow-y-auto">
          <section className="p-1 md:p-1">
            <div className="mx-auto max-w-3xl">
              <div className="space-y-6">
                <div>
                  <h1 className="p-2 text-2xl font-bold">Profile Page</h1>
                </div>
                <Card>
                  <CardBody className="space-y-4">
                    <div>
                      <h2 className="p-2 text-lg font-semibold">Gravatar</h2>
                      <div className="p-2 space-y-2">
                        <ProfileAvatar />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-2">
                        <Input
                          label="Name"
                          disabled={true}
                          id="name"
                          placeholder={user?.name}
                          type="text"
                        />
                        <Input
                          label="Email"
                          disabled={true}
                          id="current-email"
                          placeholder={user?.email}
                          type="text"
                        />
                      </div>
                    </div>
                  </CardBody>
                  <CardFooter>
                    <p
                      className="p-1 text-xs
                    "
                    >
                      At the moment, you can only change your gravatar (avatar)
                      from{" "}
                      <a
                        className="text-cyan-400 underline"
                        href="https://gravatar.com/profile/"
                        target="_blank"
                      >
                        here
                      </a>{" "}
                      To change your email or name, please contact us directly.{" "}
                    </p>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
