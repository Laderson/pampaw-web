"use server";

import { prisma } from "@/lib/prisma";

import { revalidatePath } from "next/cache";

export async function updateCategory(
  id: string,
  formData: FormData
) {
  const name = formData.get("name") as string;

  await prisma.category.update({
    where: {
      id,
    },

    data: {
      name,
    },
  });

  revalidatePath("/dashboard/categories");
}