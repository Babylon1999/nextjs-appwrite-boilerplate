import AccountPageSidebar from "@/components/AccountPageSidebar";
import PassWordUpdateForm from "@/components/PassWordUpdateForm";

export default function AccountPage() {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <AccountPageSidebar />

      {/* Main Content */}
      <div className="flex-1 lg:border-l max-sm:pb-12">
        <main className="flex-1 overflow-y-auto">
          <section className="p-1 md:p-1">
            <div className="mx-auto max-w-3xl">
              <div className="space-y-6">
                <div>
                  <h1 className="p-2 text-2xl font-bold">Security Settings</h1>
                </div>
                <PassWordUpdateForm />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
