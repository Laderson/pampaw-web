import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import DateAndTimeSelector from "@/components/appointments/date-and-time-selector";

export const metadata = {
  title: "Reservar Cita - Seleccionar Fecha | Pampaw",
  description: "Elige la fecha y hora para la cita de tu mascota.",
};

export default async function AppointmentDateSelectionPage({
  searchParams,
}: {
  searchParams: { serviceId?: string };
}) {
  const params = await searchParams;
  const serviceId = params.serviceId;

  if (!serviceId) {
    redirect("/agendar-cita");
  }

  const service = await prisma.service.findUnique({
    where: { id: serviceId },
  });

  if (!service) {
    redirect("/agendar-cita");
  }

  // Fetch future appointments from the start of today to check for double bookings
  const now = new Date();
  const startDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );

  const appointments = await prisma.appointment.findMany({
    where: {
      appointment: {
        gte: startDate,
      },
      status: {
        not: "cancelled",
      },
    },
    include: {
      service: true,
    },
  });

  // Serialize dates and relationships for the client component
  const serializedAppointments = appointments.map((app) => ({
    id: app.id,
    appointment: app.appointment.toISOString(),
    service: {
      id: app.service.id,
      name: app.service.name,
      duration: app.service.duration,
    },
  }));

  return (
    <main className="min-h-screen bg-[#F7F4EE] pb-32 pt-32">
      <div className="mx-auto max-w-3xl px-6">

        {/* Progress Bar */}
        <div className="mb-12 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-[#9B8B78]">
          <Link
            href="/agendar-cita"
            className="transition-colors hover:text-[#4E5B31]"
          >
            1. Servicio
          </Link>

          <div className="mx-4 h-px flex-1 bg-[#D8D0C4]"></div>

          <span className="text-[#4E5B31]">
            2. Fecha
          </span>

          <div className="mx-4 h-px flex-1 bg-[#D8D0C4]"></div>

          <span>
            3. Datos
          </span>
        </div>

        <div className="mb-16 text-center">
          <h1 className="text-4xl font-black tracking-tighter text-[#4E5B31] md:text-5xl">
            ¿Cuándo te esperamos?
          </h1>

          <p className="mt-4 font-medium text-[#7A5C3E]">
            Servicio seleccionado:{" "}
            <span className="font-bold text-[#4E5B31]">
              {service.name}
            </span>
          </p>
        </div>

        <div className="rounded-[3rem] border border-[#E6DED2] bg-white p-8 shadow-sm md:p-12">
          <DateAndTimeSelector
            serviceId={serviceId}
            serviceName={service.name}
            serviceDuration={service.duration}
            existingAppointments={serializedAppointments}
          />
        </div>

      </div>
    </main>
  );
}