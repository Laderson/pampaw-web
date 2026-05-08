import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const metadata = {
  title: "Reservar Cita - Seleccionar Servicio | Pampaw",
  description: "Elige el servicio que deseas agendar para tu mascota.",
};

export default async function AppointmentServiceSelectionPage() {
  const services = await prisma.service.findMany({
    orderBy: { category: "asc" }
  });

  // Agrupar servicios por categoría
  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  return (
    <main className="min-h-screen bg-[#fafafa] pb-32 pt-32">
      <div className="mx-auto max-w-3xl px-6">
        
        {/* Progress Bar */}
        <div className="mb-12 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-neutral-300">
          <span className="text-black">1. Servicio</span>
          <div className="h-px flex-1 bg-neutral-200 mx-4"></div>
          <span>2. Fecha</span>
          <div className="h-px flex-1 bg-neutral-200 mx-4"></div>
          <span>3. Datos</span>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-black tracking-tighter text-neutral-900 md:text-5xl">
            ¿Qué necesita tu mascota?
          </h1>
          <p className="mt-4 text-neutral-500 font-medium">Selecciona el servicio para continuar con tu reserva.</p>
        </div>

        <div className="space-y-12">
          {Object.entries(groupedServices).map(([category, categoryServices]) => (
            <div key={category} className="space-y-6">
              <h2 className="text-[12px] font-black uppercase tracking-[0.3em] text-neutral-400 border-b border-neutral-200 pb-4">
                {category}
              </h2>
              
              <div className="grid gap-4">
                {categoryServices.map((service) => (
                  <Link
                    key={service.id}
                    href={`/agendar-cita/fecha?serviceId=${service.id}`}
                    className="group flex items-center justify-between rounded-3xl bg-white p-6 border border-neutral-100 shadow-sm transition-all hover:border-black hover:shadow-md"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900">{service.name}</h3>
                      <p className="mt-1 text-sm text-neutral-500">{service.description}</p>
                      <div className="mt-4 flex items-center gap-4 text-xs font-semibold text-neutral-400">
                        <span>⏱ {service.duration} min</span>
                        <span>💵 ${service.price.toLocaleString("es-CO")}</span>
                      </div>
                    </div>
                    
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-50 text-neutral-400 transition-colors group-hover:bg-black group-hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
