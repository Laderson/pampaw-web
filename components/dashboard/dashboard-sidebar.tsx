import Link from "next/link";

export default function DashboardSidebar() {
  return (
    <aside className="w-[260px] border-r border-neutral-200 bg-white p-6">
      <div>
        <h2 className="text-2xl font-bold text-neutral-900">
          Pampaw Admin
        </h2>

        <p className="mt-2 text-sm text-neutral-500">
          Panel administrativo
        </p>
      </div>

      <nav className="mt-10 space-y-3">
        <Link
          href="/dashboard/appointments"
          className="block rounded-2xl px-4 py-3 text-neutral-700 transition hover:bg-neutral-100"
        >
          📅 Citas
        </Link>

        <Link
          href="/dashboard/calendar"
          className="block rounded-2xl px-4 py-3 text-neutral-700 transition hover:bg-neutral-100"
        >
          🗓️ Calendario
        </Link>

        <Link
          href="/dashboard/products"
          className="block rounded-2xl px-4 py-3 text-neutral-700 transition hover:bg-neutral-100"
        >
          🛍️ Productos
        </Link>

        <Link
          href="/dashboard/services"
          className="block rounded-2xl px-4 py-3 text-neutral-700 transition hover:bg-neutral-100"
        >
          ✂️ Servicios
        </Link>
      </nav>
    </aside>
  );
}