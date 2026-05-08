import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

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
    where: { id: serviceId }
  });

  if (!service) {
    redirect("/agendar-cita");
  }

  return (
    <main className="min-h-screen bg-[#fafafa] pb-32 pt-32">
      <div className="mx-auto max-w-3xl px-6">
        
        {/* Progress Bar */}
        <div className="mb-12 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-neutral-300">
          <Link href="/agendar-cita" className="hover:text-black transition-colors">1. Servicio</Link>
          <div className="h-px flex-1 bg-neutral-200 mx-4"></div>
          <span className="text-black">2. Fecha</span>
          <div className="h-px flex-1 bg-neutral-200 mx-4"></div>
          <span>3. Datos</span>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-black tracking-tighter text-neutral-900 md:text-5xl">
            ¿Cuándo te esperamos?
          </h1>
          <p className="mt-4 text-neutral-500 font-medium">
            Servicio seleccionado: <span className="text-black font-bold">{service.name}</span>
          </p>
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-neutral-100 shadow-sm">
          <form action="/agendar-cita/datos" method="GET" className="space-y-8">
            <input type="hidden" name="serviceId" value={serviceId} />
            
            <div className="space-y-4">
              <label className="text-[12px] font-black uppercase tracking-[0.3em] text-neutral-900 block">
                Selecciona Fecha y Hora
              </label>
              <input
                type="datetime-local"
                name="date"
                required
                className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-5 text-sm outline-none transition focus:border-black focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-black px-8 py-5 text-xs font-black uppercase tracking-[0.3em] text-white transition hover:bg-neutral-800 active:scale-95 shadow-xl"
            >
              Continuar a Datos Finales →
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}
