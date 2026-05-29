import Link from "next/link";
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

export default function ProductsSection({ products }: ProductsSectionProps) {
  return (
    <section id="petshop" className="py-32" style={{ backgroundColor: '#F7F4EE' }}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="flex items-end justify-between gap-6 pb-12">
          <div className="max-w-2xl">
            <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: '#4E5B31' }}>
              Pampaw Shop
            </span>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl" style={{ color: '#222222' }}>
              Esenciales <br />
              <span style={{ color: '#4E5B31' }}>Para tu Mascota.</span>
            </h2>
          </div>

          <Link
            href="/petshop"
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em]"
            style={{ color: '#222222' }}
          >
            Ver catálogo completo
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
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