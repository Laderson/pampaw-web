"use server";

import { prisma } from "@/lib/prisma";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { appointmentSchema } from "@/lib/validations/appointment";

export async function createAppointment(
  prevState: any,
  formData: FormData
) {

  const rawData = {

    // OWNER
    ownerName: formData.get("ownerName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: formData.get("address"),

    // PET
    petName: formData.get("petName"),
    petType: formData.get("petType"),
    petBreed: formData.get("petBreed"),
    petGender: formData.get("petGender"),

    // APPOINTMENT
    serviceId: formData.get("serviceId"),
    appointment: formData.get("appointment"),
  };

  // VALIDAR
  const result = appointmentSchema.safeParse(rawData);

  // SI FALLA
  if (!result.success) {

    console.log(result.error.flatten());

    return {
      success: false,
      errors: result.error.flatten(),
    };
  }

  const data = result.data;

  // VALIDAR FECHA
  const appointmentDate = new Date(data.appointment);

  if (appointmentDate < new Date()) {
    return {
      success: false,
      message: "No puedes reservar fechas pasadas",
    };
  }

  // VALIDAR SERVICIO
  const service = await prisma.service.findUnique({
    where: {
      id: data.serviceId,
    },
  });

  if (!service) {
    return {
      success: false,
      message: "Servicio inválido",
    };
  }

  // FIND USER
  let user = await prisma.user.findFirst({
    where: {
      OR: [
        {
          phone: data.phone,
        },
        {
          email: data.email,
        },
      ],
    },
  });

  // CREAR USUARIO
  if (!user) {

    user = await prisma.user.create({
      data: {
        phone: data.phone,
        name: data.ownerName,
        email: data.email,
      },
    });
  }

  // CHECK DUPLICATE APPOINTMENT
  const existingAppointment =
    await prisma.appointment.findFirst({
      where: {
        appointment: new Date(data.appointment),
      },
    });

  if (existingAppointment) {
    redirect("/agendar-cita/fecha?error=horario-ocupado");
  }

  // DOMINGO
  if (appointmentDate.getDay() === 0) {
    return {
      success: false,
      message: "No atendemos domingos",
    };
  }

  // HORARIO
  const hour = appointmentDate.getHours();

  if (hour < 7 || hour >= 19) {
    return {
      success: false,
      message: "Horario inválido",
    };
  }

  // CREAR RESERVA
  const appointment = await prisma.appointment.create({
    data: {

      ownerName: data.ownerName,
      email: data.email,
      phone: data.phone,
      address: data.address,

      petName: data.petName,
      petType: data.petType,
      petBreed: data.petBreed,
      petGender: data.petGender,

      serviceId: data.serviceId,

      userId: user.id,

      appointment: appointmentDate,
    },
  });

  revalidatePath("/dashboard/calendar");
  revalidatePath("/");

  redirect(
    `/agendar-cita/exito?appointmentId=${appointment.id}`
  );
}