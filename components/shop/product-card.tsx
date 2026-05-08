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
    <div className="group overflow-hidden rounded-[2rem] border border-neutral-100 bg-white transition-all duration-300 hover:bg-neutral-50/50">
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-neutral-50">
        <img
          src={imageUrl || "/images/placeholder.jpg"}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-xl font-black tracking-tight text-neutral-900">
          {name}
        </h3>

        <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-500">
          {description}
        </p>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-wider text-neutral-400">Precio</span>
            <span className="text-lg font-black text-neutral-900">
              ${price.toLocaleString("es-CO")}
            </span>
          </div>

          <a 
            href={`https://wa.me/573000000000?text=Hola,%20quiero%20comprar%20el%20producto:%20${encodeURIComponent(name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-neutral-800 active:scale-95 text-center"
          >
            Comprar
          </a>

        </div>
      </div>
    </div>
  );
}