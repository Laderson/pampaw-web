import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";
import FinalDataForm from "./final-data-form";

export const metadata = {
  title: "Reservar Cita - Datos Finales | Pampaw",
  description: "Completa tus datos para confirmar tu cita.",
};

export default async function AppointmentDataPage({
  searchParams,
}: {
  searchParams: { serviceId?: string; date?: string };
}) {
  const params = await searchParams;
  const { serviceId, date } = params;

  if (!serviceId || !date) {
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
          <Link href={`/agendar-cita/fecha?serviceId=${serviceId}`} className="hover:text-black transition-colors">2. Fecha</Link>
          <div className="h-px flex-1 bg-neutral-200 mx-4"></div>
          <span className="text-black">3. Datos</span>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-black tracking-tighter text-neutral-900 md:text-5xl">
            Último paso
          </h1>
          <p className="mt-4 text-neutral-500 font-medium">
            Ingresa tus datos para confirmar tu cita de <span className="text-black font-bold">{service.name}</span>
          </p>
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-neutral-100 shadow-sm">
          <FinalDataForm serviceId={serviceId} appointmentDate={date} />
        </div>

      </div>
    </main>
  );
}
