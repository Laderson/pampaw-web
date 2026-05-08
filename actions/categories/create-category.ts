"use server";

import { prisma } from "@/lib/prisma";

import { redirect } from "next/navigation";

export async function createCategory(
  formData: FormData
) {
  const name = formData.get("name") as string;

  await prisma.category.create({
    data: {
      name,
    },
  });

  redirect("/dashboard/categories");
}