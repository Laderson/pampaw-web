"use server";

import { prisma } from "@/lib/prisma";

import { redirect } from "next/navigation";

export async function createProduct(
  formData: FormData
) {
  const name = formData.get("name") as string;

  const description = formData.get(
    "description"
  ) as string;

  const price = Number(
    formData.get("price")
  );

  const stock = Number(
    formData.get("stock")
  );

  const imageUrl = formData.get(
    "imageUrl"
  ) as string;

  const categoryId = formData.get(
    "categoryId"
  ) as string;

  await prisma.product.create({
    data: {
      name,
      description,
      price,
      stock,
      imageUrl,
      categoryId,
    },
  });

  redirect("/dashboard/products");
}