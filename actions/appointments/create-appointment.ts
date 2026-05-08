"use server";

import { prisma } from "@/lib/prisma";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createAppointment(formData: FormData) {
  const ownerName = formData.get("ownerName") as string;
  const phone = formData.get("phone") as string;
  const petName = formData.get("petName") as string;
  const petType = formData.get("petType") as "DOG" | "CAT" | "OTHER";
  const serviceId = formData.get("serviceId") as string;
  const appointment = formData.get("appointment") as string;

  // 1. Encontrar o crear usuario (Shadow login)
  let user = await prisma.user.findUnique({
    where: { phone },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        phone,
        name: ownerName,
      },
    });
  }

  // 2. Crear cita vinculada al usuario
  await prisma.appointment.create({
    data: {
      ownerName,
      phone,
      petName,
      petType,
      serviceId,
      userId: user.id,
      appointment: new Date(appointment),
    },
  });

  revalidatePath("/dashboard/calendar");
  revalidatePath("/");
  redirect("/agendar-cita/exito");
}