import { prisma } from "@/lib/prisma";
import AppointmentsCalendar from "@/components/dashboard/appointments-calendar";

export default async function CalendarPage() {
  const appointments =
    await prisma.appointment.findMany({
      include: {
        service: true,
      },
    });

  return (
    <main className="bg-white min-h-screen p-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-neutral-900">
          Calendario de citas
        </h1>

        <div className="mt-10">
          <AppointmentsCalendar
            appointments={appointments}
          />
        </div>
      </div>
    </main>
  );
}