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
    <div className="group relative rounded-[2rem] border border-neutral-100 bg-white p-10 transition-all duration-300 hover:border-neutral-900/10 hover:bg-neutral-50/50">
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-300">{category}</span>
            <h3 className="text-2xl font-black tracking-tight text-neutral-900 transition-colors">
              {name}
            </h3>
          </div>
          <div className="rounded-full bg-neutral-50 p-2 text-neutral-400 transition-colors group-hover:bg-black group-hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>

        <p className="mt-6 text-base text-neutral-500 leading-relaxed grow">
          {description}
        </p>

        <div className="mt-10 flex items-center justify-between border-t border-neutral-100 pt-8">
          <div className="flex flex-col">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-400">Desde</span>
            <span className="text-xl font-black text-neutral-900">
              ${price.toLocaleString("es-CO")}
            </span>
          </div>

          <Link
            href={`/agendar-cita/fecha?serviceId=${id}`}
            className="rounded-full bg-black px-8 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-neutral-800 active:scale-95"
          >
            Reservar
          </Link>
        </div>
      </div>
    </div>
  );
}
