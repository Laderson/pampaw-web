import ServicesGrid from "./services-grid";

type Service = {
  id: string;
  name: string;
  category: string;
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
    <section id="servicios" className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-neutral-100 pb-12">
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">
              Nuestra Experiencia
            </h2>
            <h3 className="mt-4 text-4xl font-extrabold tracking-tight text-neutral-900 md:text-5xl">
              Cuidado Integral <br />
              <span className="text-neutral-300">& Servicios Premium</span>
            </h3>
          </div>
          <p className="max-w-md text-lg text-neutral-500 font-medium">
            Desde spa especializado hasta atención veterinaria avanzada, ofrecemos todo lo que tu mascota necesita bajo un mismo techo.
          </p>
        </div>

        <div className="mt-16">
          <ServicesGrid services={services} />
        </div>
      </div>
    </section>
  );
}