import ServiceForm from "@/components/dashboard/services/service-form";

import { createService } from "@/actions/services/create-service";

export default function NewServicePage() {
  return (
    <main className="max-w-3xl">
      <div>
        <h1 className="text-4xl font-bold text-neutral-900">
          Nuevo servicio
        </h1>

        <p className="mt-2 text-neutral-600">
          Crea un nuevo servicio.
        </p>
      </div>

      <ServiceForm action={createService} />
    </main>
  );
}