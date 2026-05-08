import { prisma } from "@/lib/prisma";

import CategoriesList from "@/components/dashboard/categories/categories-list";

export default async function CategoriesPage() {
  const categories = await prisma.category.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main>
      <CategoriesList categories={categories} />
    </main>
  );
}