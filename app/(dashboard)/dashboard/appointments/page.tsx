import { prisma } from "@/lib/prisma";
import { updateAppointmentStatus } from "@/actions/appointments/update-appointment-status";

export default async function DashboardAppointmentsPage({
  searchParams,
}: {
  searchParams: Promise<{
    status?: string;
    search?: string;
    page?: string;
  }>;
}) {

  const params = await searchParams;

  const selectedStatus = params.status;

  const search = params.search || "";

  const currentPage = Number(params.page || "1");

  const pageSize = 5;

  const totalAppointments =
    await prisma.appointment.count({
      where: {
        ...(selectedStatus
          ? {
              status: selectedStatus as any,
            }
          : {}),

        ...(search
          ? {
              OR: [
                {
                  ownerName: {
                    contains: search,
                    mode: "insensitive",
                  },
                },

                {
                  petName: {
                    contains: search,
                    mode: "insensitive",
                  },
                },

                {
                  phone: {
                    contains: search,
                  },
                },
              ],
            }
          : {}),
      },
    });

  const appointments = await prisma.appointment.findMany({
    skip: (currentPage - 1) * pageSize,

    take: pageSize,

    where: {
      ...(selectedStatus
        ? {
            status: selectedStatus as any,
          }
        : {}),

      ...(search
        ? {
            OR: [
              {
                ownerName: {
                  contains: search,
                  mode: "insensitive",
                },
              },

              {
                petName: {
                  contains: search,
                  mode: "insensitive",
                },
              },

              {
                phone: {
                  contains: search,
                },
              },
            ],
          }
        : {}),
    },

    include: {
      service: true,
    },

    orderBy: {
      appointment: "asc",
    },
  });

  const totalPages = Math.ceil(
    totalAppointments / pageSize
  );

  const [
    pendingCount,
    confirmedCount,
    completedCount,
    cancelledCount,
  ] = await Promise.all([
    prisma.appointment.count({
      where: {
        status: "PENDING",
      },
    }),

    prisma.appointment.count({
      where: {
        status: "CONFIRMED",
      },
    }),

    prisma.appointment.count({
      where: {
        status: "COMPLETED",
      },
    }),

    prisma.appointment.count({
      where: {
        status: "CANCELLED",
      },
    }),
  ]);

  return (
    <main className="bg-white min-h-screen p-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-neutral-900">
          Citas agendadas
        </h1>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl border border-yellow-200 bg-yellow-50 p-6">
            <p className="text-sm font-medium text-yellow-700">
              Pendientes
            </p>

            <h2 className="mt-2 text-4xl font-bold text-yellow-900">
              {pendingCount}
            </h2>
          </div>

          <div className="rounded-3xl border border-green-200 bg-green-50 p-6">
            <p className="text-sm font-medium text-green-700">
              Confirmadas
            </p>

            <h2 className="mt-2 text-4xl font-bold text-green-900">
              {confirmedCount}
            </h2>
          </div>

          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
            <p className="text-sm font-medium text-blue-700">
              Completadas
            </p>

            <h2 className="mt-2 text-4xl font-bold text-blue-900">
              {completedCount}
            </h2>
          </div>

          <div className="rounded-3xl border border-red-200 bg-red-50 p-6">
            <p className="text-sm font-medium text-red-700">
              Canceladas
            </p>

            <h2 className="mt-2 text-4xl font-bold text-red-900">
              {cancelledCount}
            </h2>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="/dashboard/appointments"
            className="rounded-2xl border border-neutral-200 px-4 py-2 text-sm font-medium"
          >
            Todas
          </a>

          <a
            href="/dashboard/appointments?status=PENDING"
            className="rounded-2xl border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-700"
          >
            Pendientes
          </a>

          <a
            href="/dashboard/appointments?status=CONFIRMED"
            className="rounded-2xl border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700"
          >
            Confirmadas
          </a>

          <a
            href="/dashboard/appointments?status=COMPLETED"
            className="rounded-2xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
          >
            Completadas
          </a>

          <a
            href="/dashboard/appointments?status=CANCELLED"
            className="rounded-2xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700"
          >
            Canceladas
          </a>
        </div>

        <form className="mt-6">
          <input
            type="text"
            name="search"
            defaultValue={search}
            placeholder="Buscar dueño, mascota o teléfono..."
            className="w-full rounded-2xl border border-neutral-200 px-5 py-4 outline-none transition focus:border-neutral-400"
          />
        </form>

        <div className="mt-10 grid gap-6">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="rounded-3xl border border-neutral-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-neutral-900">
                    {appointment.ownerName}
                  </h2>

                  <p className="mt-2 text-neutral-600">
                    Mascota: {appointment.petName}
                  </p>

                  <p className="text-neutral-600">
                    Servicio: {appointment.service.name}
                  </p>

                  <p className="text-neutral-600">
                    Teléfono: {appointment.phone}
                  </p>
                </div>

                <div className="text-right space-y-4">
                  <p className="font-medium text-neutral-900">
                    {new Date(
                      appointment.appointment
                    ).toLocaleString("es-CO", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </p>

                  <div className="mt-3">
                    {appointment.status === "PENDING" && (
                      <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
                        Pendiente
                      </span>
                    )}

                    {appointment.status === "CONFIRMED" && (
                      <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                        Confirmada
                      </span>
                    )}

                    {appointment.status === "COMPLETED" && (
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                        Completada
                      </span>
                    )}

                    {appointment.status === "CANCELLED" && (
                      <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
                        Cancelada
                      </span>
                    )}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <form
                      action={async () => {
                        "use server";

                        await updateAppointmentStatus(
                          appointment.id,
                          "CONFIRMED"
                        );
                      }}
                    >
                      <button
                        className="rounded-xl bg-green-600 px-4 py-2 text-sm font-medium text-white"
                      >
                        Confirmar
                      </button>
                    </form>

                    <form
                      action={async () => {
                        "use server";

                        await updateAppointmentStatus(
                          appointment.id,
                          "COMPLETED"
                        );
                      }}
                    >
                      <button
                        className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white"
                      >
                        Completar
                      </button>
                    </form>

                    <form
                      action={async () => {
                        "use server";

                        await updateAppointmentStatus(
                          appointment.id,
                          "CANCELLED"
                        );
                      }}
                    >
                      <button
                        className="rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white"
                      >
                        Cancelar
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-3">
          {Array.from({ length: totalPages }).map(
            (_, index) => {
              const page = index + 1;

              return (
                <a
                  key={page}
                  href={`/dashboard/appointments?page=${page}`}
                  className={`rounded-2xl px-4 py-2 text-sm font-medium ${
                    currentPage === page
                      ? "bg-neutral-900 text-white"
                      : "border border-neutral-200"
                  }`}
                >
                  {page}
                </a>
              );
            }
          )}
        </div>
      </div>
    </main>
  );
}