import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Tienda para Mascotas en Barranquilla | Pampaw Pet Store",
  description:
    "Compra productos para mascotas en Barranquilla. Accesorios, alimentos y productos premium.",
};

export default async function TiendaMascotasPage() {
  const products = await prisma.product.findMany();

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-[#f8f6f2] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm">
              🛍️ Tienda de Mascotas
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-neutral-900">
              Productos premium para mascotas en Barranquilla.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              Descubre accesorios, alimentos y productos de calidad para el
              cuidado de tu mascota.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-3xl border border-neutral-200"
            >
              <div className="aspect-square overflow-hidden bg-neutral-100">
                <img
                  src={product.imageUrl || ""}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-semibold text-neutral-900">
                  {product.name}
                </h2>

                <p className="mt-4 leading-relaxed text-neutral-600">
                  {product.description}
                </p>

                <div className="mt-6 text-lg font-bold text-neutral-900">
                  ${product.price.toLocaleString("es-CO")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}