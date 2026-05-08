import ServicesGrid from "./services-grid";

type Service = {
  id: string;
  name: string;
  description: string | null;
  price: number;
};

type ServicesSectionProps = {
  services: Service[];
};

export default function ServicesSection({
  services,
}: ServicesSectionProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
            Servicios
          </span>

          <h2 className="mt-4 text-4xl font-bold text-neutral-900">
            Servicios para el cuidado de tu mascota.
          </h2>
        </div>

        <div className="mt-14">
          <ServicesGrid services={services} />
        </div>
      </div>
    </section>
  );
}