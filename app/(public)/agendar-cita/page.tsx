import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const metadata = {
  title: "Reservar Cita - Seleccionar Servicio | Pampaw",
  description: "Elige el servicio que deseas agendar para tu mascota.",
};

export default async function AppointmentServiceSelectionPage() {
  const services = await prisma.service.findMany({
    orderBy: { category: "asc" },
  });

  // Agrupar servicios por categoría
  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  return (
    <main className="min-h-screen bg-[#F7F4EE] pb-32 pt-32">
      <div className="mx-auto max-w-3xl px-6">
        
        {/* Progress Bar */}
        <div className="mb-12 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-[#9B8B78]">
          <span className="text-[#4E5B31]">1. Servicio</span>
          <div className="mx-4 h-px flex-1 bg-[#D8D0C4]"></div>
          <span>2. Fecha</span>
          <div className="mx-4 h-px flex-1 bg-[#D8D0C4]"></div>
          <span>3. Datos</span>
        </div>

        <div className="mb-16 text-center">
          <h1 className="text-4xl font-black tracking-tighter text-[#4E5B31] md:text-5xl">
            ¿Qué necesita tu mascota?
          </h1>

          <p className="mt-4 font-medium text-[#7A5C3E]">
            Selecciona el servicio para continuar con tu reserva.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(groupedServices).map(
            ([category, categoryServices]) => (
              <div key={category} className="space-y-6">
                <h2 className="border-b border-[#D8D0C4] pb-4 text-[12px] font-black uppercase tracking-[0.3em] text-[#9B8B78]">
                  {category}
                </h2>

                <div className="grid gap-4">
                  {categoryServices.map((service) => (
                    <Link
                      key={service.id}
                      href={`/agendar-cita/fecha?serviceId=${service.id}`}
                      className="group flex items-center justify-between rounded-3xl border border-[#E6DED2] bg-white p-6 shadow-sm transition-all hover:border-[#4E5B31] hover:shadow-md"
                    >
                      <div>
                        <h3 className="text-lg font-bold text-[#4E5B31]">
                          {service.name}
                        </h3>

                        <p className="mt-1 text-sm text-[#7A5C3E]">
                          {service.description}
                        </p>

                        <div className="mt-4 flex items-center gap-4 text-xs font-semibold text-[#9B8B78]">
                          <span>⏱ {service.duration} min</span>
                          <span>
                            💵 $
                            {service.price.toLocaleString("es-CO")}
                          </span>
                        </div>
                      </div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F7F4EE] text-[#7A5C3E] transition-colors group-hover:bg-[#4E5B31] group-hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}