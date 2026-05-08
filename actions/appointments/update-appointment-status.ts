"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateAppointmentStatus(
  appointmentId: string,
  status:
    | "PENDING"
    | "CONFIRMED"
    | "COMPLETED"
    | "CANCELLED"
) {
  await prisma.appointment.update({
    where: {
      id: appointmentId,
    },

    data: {
      status,
    },
  });

  revalidatePath("/dashboard/appointments");
}