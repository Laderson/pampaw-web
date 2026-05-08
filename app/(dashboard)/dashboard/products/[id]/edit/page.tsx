import { prisma } from "@/lib/prisma";

import ProductForm from "@/components/dashboard/products/product-form";

import { updateProduct } from "@/actions/products/update-product";

import { deleteProduct } from "@/actions/products/delete-product";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product =
    await prisma.product.findUnique({
      where: {
        id,
      },
    });

  const categories =
    await prisma.category.findMany({
      orderBy: {
        name: "asc",
      },
    });

  if (!product) {
    return (
      <main>
        <h1>Producto no encontrado</h1>
      </main>
    );
  }

  return (
    <main className="max-w-3xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-neutral-900">
            Editar producto
          </h1>

          <p className="mt-2 text-neutral-600">
            Actualiza la información del producto.
          </p>
        </div>

        <form
          action={deleteProduct.bind(
            null,
            product.id
          )}
        >
          <button
            type="submit"
            className="rounded-2xl bg-red-600 px-5 py-3 text-white"
          >
            Eliminar
          </button>
        </form>
      </div>

      <ProductForm
        categories={categories}
        defaultValues={product}
        action={updateProduct.bind(
          null,
          product.id
        )}
      />
    </main>
  );
}