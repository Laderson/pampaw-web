import Link from "next/link";

type ServiceCardProps = {
  id: string;
  name: string;
  category: string;
  description: string | null;
  price: number;
};

export default function ServiceCard({
  id,
  name,
  category,
  description,
  price,
}: ServiceCardProps) {
  return (
    <div
      className="group relative rounded-[2rem] p-10 transition-all duration-300"
      style={{ backgroundColor: '#E9DFC9', border: '1px solid #E9DFC9' }}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: '#4E5B31' }}>
              {category}
            </span>
            <h3 className="text-2xl font-black tracking-tight transition-colors" style={{ color: '#222222' }}>
              {name}
            </h3>
          </div>
          <div
            className="rounded-full p-2 transition-colors service-card-icon"
            style={{ backgroundColor: '#F7F4EE', color: '#4E5B31' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </div>
        </div>

        <p className="mt-6 text-base leading-relaxed grow" style={{ color: '#222222', opacity: 0.6 }}>
          {description}
        </p>

        <div className="mt-10 flex items-center justify-between pt-8" style={{ borderTop: '1px solid #d4c9b0' }}>
          <div className="flex flex-col">
            <span className="text-[9px] font-black uppercase tracking-[0.2em]" style={{ color: '#4E5B31' }}>
              Desde
            </span>
            <span className="text-xl font-black" style={{ color: '#222222' }}>
              ${price.toLocaleString("es-CO")}
            </span>
          </div>

          <Link
            href={`/agendar-cita/fecha?serviceId=${id}`}
            className="rounded-full px-8 py-4 text-[9px] font-black uppercase tracking-[0.2em] transition active:scale-95 service-card-btn"
          >
            Reservar
          </Link>
        </div>
      </div>

      <style>{`
        .service-card-icon { background-color: #F7F4EE; color: #4E5B31; }
        .group:hover .service-card-icon { background-color: #4E5B31; color: #F7F4EE; }
        .service-card-btn { background-color: #4E5B31; color: #F7F4EE; }
        .service-card-btn:hover { background-color: #3a4425; }
      `}</style>
    </div>
  );
}