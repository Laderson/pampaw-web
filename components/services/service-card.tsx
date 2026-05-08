type ServiceCardProps = {
  name: string;
  description: string | null;
  price: number;
};

export default function ServiceCard({
  name,
  description,
  price,
}: ServiceCardProps) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-2xl font-semibold text-neutral-900">
        {name}
      </h3>

      <p className="mt-4 leading-relaxed text-neutral-600">
        {description}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-lg font-bold text-neutral-900">
          ${price.toLocaleString("es-CO")}
        </span>

        <button className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:opacity-90">
          <a
            href="/agendar-cita"
          >
            Agendar
          </a>
        </button>
      </div>
    </div>
  );
}