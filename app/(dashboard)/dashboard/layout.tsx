import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#fafafa]">
      <DashboardSidebar />

      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  );
}