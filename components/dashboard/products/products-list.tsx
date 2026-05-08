import Link from "next/link";

export default function ProductsList({
  products,
}: any) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-neutral-900">
            Productos
          </h1>

          <p className="mt-2 text-neutral-600">
            Administra los productos de la tienda.
          </p>
        </div>

        <Link
          href="/dashboard/products/new"
          className="rounded-2xl bg-neutral-900 px-5 py-3 text-white"
        >
          Nuevo producto
        </Link>
      </div>

      <div className="mt-10 grid gap-4">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="flex items-center justify-between rounded-3xl border border-neutral-200 bg-white p-6"
          >
            <div>
              <h2 className="text-xl font-semibold text-neutral-900">
                {product.name}
              </h2>

              <p className="mt-1 text-neutral-600">
                {product.category.name}
              </p>

              <p className="mt-2 font-medium text-neutral-900">
                ${product.price.toLocaleString("es-CO")}
              </p>
            </div>

            <Link
              href={`/dashboard/products/${product.id}/edit`}
              className="rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium"
            >
              Editar
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}