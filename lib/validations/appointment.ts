import { z } from "zod";

export const appointmentSchema = z.object({
  ownerName: z
    .string()
    .min(3, "Nombre muy corto"),

  email: z
    .string()
    .email("Correo inválido"),

  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Teléfono inválido"),

  address: z
    .string()
    .min(5, "Dirección inválida"),

  petName: z
    .string()
    .min(2, "Nombre de mascota inválido"),

  petType: z.enum(["DOG", "CAT", "OTHER"]),

  petBreed: z
    .string()
    .optional(),

  petGender: z.enum(["MALE", "FEMALE"]),

  serviceId: z
    .string()
    .min(1, "Servicio inválido"),

  appointment: z
    .string()
    .refine((value) => !isNaN(new Date(value).getTime()), {
        message: "Fecha inválida",
    })
    .transform((value) => new Date(value))
});