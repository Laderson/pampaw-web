import ProductCard from "./product-card";

type Product = {
  id: string;
  name: string;
  description: string | null;
  price: number;
  imageUrl: string | null;
};

type ProductsSectionProps = {
  products: Product[];
};

export default function ProductsSection({
  products,
}: ProductsSectionProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
              Tienda
            </span>

            <h2 className="mt-4 text-4xl font-bold text-neutral-900">
              Productos destacados para tu mascota.
            </h2>
          </div>

          <a
            href="/tienda-mascotas-barranquilla"
            className="hidden text-sm font-semibold text-neutral-900 md:block"
          >
            Ver todos →
          </a>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}