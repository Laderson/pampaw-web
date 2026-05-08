import { prisma } from "@/lib/prisma";
import { createAppointment } from "@/actions/appointments/create-appointment";

export const metadata = {
  title: "Agendar Cita | Pampaw Pet Store",
  description:
    "Agenda fácilmente una cita para tu mascota en Pampaw Pet Store.",
};

export default async function AppointmentPage() {
  const services = await prisma.service.findMany();

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-[#f8f6f2] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm">
              📅 Agendar cita
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-neutral-900">
              Reserva el cuidado ideal para tu mascota.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              Agenda fácilmente servicios de spa, grooming y atención para tu
              mascota en Pampaw Pet Store.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl border border-neutral-200 p-8">
            <form
              action={createAppointment}
              className="space-y-6"
            >
              {/* Owner */}
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Nombre del dueño
                </label>

                <input
                  type="text"
                  name="ownerName"
                  required
                  placeholder="Ej: Juan Pérez"
                  className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-neutral-400"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Teléfono
                </label>

                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="Ej: 3001234567"
                  className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-neutral-400"
                />
              </div>

              {/* Pet Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Nombre de la mascota
                </label>

                <input
                  type="text"
                  name="petName"
                  required
                  placeholder="Ej: Max"
                  className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-neutral-400"
                />
              </div>

              {/* Pet Type */}
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Tipo de mascota
                </label>

                <select
                  name="petType"
                  className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-neutral-400"
                >
                  <option value="DOG">Perro</option>
                  <option value="CAT">Gato</option>
                  <option value="OTHER">Otro</option>
                </select>
              </div>

              {/* Service */}
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Servicio
                </label>

                <select
                  name="serviceId"
                  className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-neutral-400"
                >
                  {services.map((service) => (
                    <option
                      key={service.id}
                      value={service.id}
                    >
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Fecha de la cita
                </label>

                <input
                  type="datetime-local"
                  name="appointment"
                  required
                  className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-neutral-400"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-neutral-900 px-6 py-4 text-white transition hover:bg-neutral-800"
              >
                Agendar cita
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}