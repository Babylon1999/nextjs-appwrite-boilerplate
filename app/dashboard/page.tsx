import { title } from "@/components/primitives";
import { getLoggedInUser } from "@/utils/server/appwrite";

export default async function DashboardPage() {
  const user = await getLoggedInUser();
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className={title({ color: "pink" })}>Welcome, {user?.name}</h1>
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-center">
        Here is more data about your user:
      </h2>
      <div className="w-full sm:w-3/4 lg:w-full rounded shadow-md sm:overflow-visible overflow-auto">
        <pre className="text-xs sm:text-sm md:text-base">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
}
