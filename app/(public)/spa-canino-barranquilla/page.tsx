import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Spa Canino en Barranquilla | Pampaw Pet Store",
  description:
    "Servicio profesional de spa canino en Barranquilla. Baño, grooming, corte y cuidado premium para mascotas.",
};

export default async function SpaCaninoPage() {
  const services = await prisma.service.findMany();

  return (
    <main style={{ backgroundColor: '#F7F4EE' }}>
      {/* Hero */}
      <section className="py-24" style={{ backgroundColor: '#E9DFC9' }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span
              className="rounded-full px-4 py-2 text-sm font-medium"
              style={{ backgroundColor: '#F7F4EE', color: '#4E5B31' }}
            >
              🐶 Spa Canino en Barranquilla
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight" style={{ color: '#222222' }}>
              Cuidado premium para tu mascota.
            </h1>

            <p className="mt-6 text-lg leading-relaxed" style={{ color: '#222222', opacity: 0.6 }}>
              En Pampaw ofrecemos servicios profesionales de baño, grooming,
              limpieza y cuidado estético para mascotas en Barranquilla.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-3xl p-8"
                style={{ backgroundColor: '#E9DFC9', border: '1px solid #E9DFC9' }}
              >
                <h2 className="text-2xl font-semibold" style={{ color: '#222222' }}>
                  {service.name}
                </h2>

                <p className="mt-4 leading-relaxed" style={{ color: '#222222', opacity: 0.6 }}>
                  {service.description}
                </p>

                <div className="mt-6 text-lg font-bold" style={{ color: '#4E5B31' }}>
                  ${service.price.toLocaleString("es-CO")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}