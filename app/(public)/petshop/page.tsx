import { prisma } from "@/lib/prisma";
import ProductCard from "@/components/shop/product-card";

export const metadata = {
  title: "Tienda para Mascotas en Barranquilla | Pampaw Pet Store",
  description:
    "Compra productos para mascotas en Barranquilla. Accesorios, alimentos y productos premium.",
};

export default async function TiendaMascotasPage() {
  const products = await prisma.product.findMany();

  return (
    <main className="min-h-screen pb-32" style={{ backgroundColor: '#E9DFC9' }}>
      {/* Hero */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: '#4E5B31' }}>
            Pampaw Shop
          </span>

          <h1 className="mt-8 text-5xl font-black tracking-tighter md:text-7xl" style={{ color: '#222222' }}>
            Calidad <span style={{ color: '#4E5B31' }}>Sin Compromisos.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg font-medium leading-relaxed" style={{ color: '#222222', opacity: 0.55 }}>
            Descubre nuestra selección curada de alimentos, accesorios y productos premium para elevar la vida de tu mascota.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
    </main>
  );
}