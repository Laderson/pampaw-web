import { prisma } from "@/lib/prisma";

import ProductsList from "@/components/dashboard/products/products-list";

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    include: {
      category: true,
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main>
      <ProductsList products={products} />
    </main>
  );
}