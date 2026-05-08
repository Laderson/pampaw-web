import { prisma } from "@/lib/prisma";

import ProductForm from "@/components/dashboard/products/product-form";

import { createProduct } from "@/actions/products/create-product";

export default async function NewProductPage() {
  const categories =
    await prisma.category.findMany({
      orderBy: {
        name: "asc",
      },
    });

  return (
    <main className="max-w-3xl">
      <h1 className="text-4xl font-bold text-neutral-900">
        Nuevo producto
      </h1>

      <ProductForm
        categories={categories}
        action={createProduct}
      />
    </main>
  );
}