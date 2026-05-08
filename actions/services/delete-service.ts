"use server";

import { prisma } from "@/lib/prisma";

import { redirect } from "next/navigation";

export async function deleteService(
  id: string
) {
  await prisma.service.delete({
    where: {
      id,
    },
  });

  redirect("/dashboard/services");
}