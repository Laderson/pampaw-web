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

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="servicios" className="py-32" style={{ backgroundColor: '#F7F4EE' }}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12">
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: '#4E5B31' }}>
              Nuestra Experiencia
            </h2>
            <h3 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl" style={{ color: '#222222' }}>
              Cuidado Integral <br />
              <span style={{ color: '#4E5B31' }}>& Servicios Premium</span>
            </h3>
          </div>
          <p className="max-w-md text-lg font-medium" style={{ color: '#222222', opacity: 0.55 }}>
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