"use server";

import { prisma } from "@/lib/prisma";

export async function createAppointment(formData: FormData) {
  const ownerName = formData.get("ownerName") as string;

  const phone = formData.get("phone") as string;

  const petName = formData.get("petName") as string;

  const petType = formData.get("petType") as "DOG" | "CAT" | "OTHER";

  const serviceId = formData.get("serviceId") as string;

  const appointment = formData.get("appointment") as string;

  await prisma.appointment.create({
    data: {
      ownerName,
      phone,
      petName,
      petType,
      serviceId,
      appointment: new Date(appointment),
    },
  });
}