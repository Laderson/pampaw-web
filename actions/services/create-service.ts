"use server";

import { prisma } from "@/lib/prisma";

import { redirect } from "next/navigation";

export async function createService(
  formData: FormData
) {
  const name = formData.get("name") as string;

  const description = formData.get(
    "description"
  ) as string;

  const price = Number(
    formData.get("price")
  );

  const duration = Number(
    formData.get("duration")
  );

  await prisma.service.create({
    data: {
      name,
      description,
      price,
      duration,
    },
  });

  redirect("/dashboard/services");
}