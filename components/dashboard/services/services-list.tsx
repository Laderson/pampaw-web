import Link from "next/link";

export default function ServicesList({
  services,
}: any) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-neutral-900">
            Servicios
          </h1>

          <p className="mt-2 text-neutral-600">
            Administra los servicios.
          </p>
        </div>

        <Link
          href="/dashboard/services/new"
          className="rounded-2xl bg-neutral-900 px-5 py-3 text-white"
        >
          Nuevo servicio
        </Link>
      </div>

      <div className="mt-10 grid gap-4">
        {services.map((service: any) => (
          <div
            key={service.id}
            className="flex items-center justify-between rounded-3xl border border-neutral-200 bg-white p-6"
          >
            <div>
              <h2 className="text-xl font-semibold text-neutral-900">
                {service.name}
              </h2>

              <p className="mt-2 text-neutral-600">
                {service.description}
              </p>

              <p className="mt-3 font-medium text-neutral-900">
                ${service.price.toLocaleString("es-CO")}
              </p>
            </div>

            <Link
              href={`/dashboard/services/${service.id}/edit`}
              className="rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium"
            >
              Editar
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}