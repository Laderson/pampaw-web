import { prisma } from "@/lib/prisma";

import ServiceForm from "@/components/dashboard/services/service-form";

import { updateService } from "@/actions/services/update-service";

import { deleteService } from "@/actions/services/delete-service";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const service =
    await prisma.service.findUnique({
      where: {
        id,
      },
    });

  if (!service) {
    return (
      <main>
        <h1 className="text-4xl font-bold">
          Servicio no encontrado
        </h1>
      </main>
    );
  }

  return (
    <main className="max-w-3xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-neutral-900">
            Editar servicio
          </h1>

          <p className="mt-2 text-neutral-600">
            Actualiza el servicio.
          </p>
        </div>

        <form
          action={deleteService.bind(
            null,
            service.id
          )}
        >
          <button
            type="submit"
            className="rounded-2xl bg-red-600 px-5 py-3 text-white"
          >
            Eliminar
          </button>
        </form>
      </div>

      <ServiceForm
        defaultValues={service}
        action={updateService.bind(
          null,
          service.id
        )}
      />
    </main>
  );
}