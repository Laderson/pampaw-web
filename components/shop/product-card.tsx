type ProductCardProps = {
  name: string;
  description: string | null;
  price: number;
  imageUrl: string | null;
};

export default function ProductCard({
  name,
  description,
  price,
  imageUrl,
}: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-neutral-100">
        <img
          src={imageUrl || ""}
          alt={name}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-neutral-900">
          {name}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
          {description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-lg font-bold text-neutral-900">
            ${price.toLocaleString("es-CO")}
          </span>

          <button className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:opacity-90">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}