import { prisma } from "@/lib/prisma";

export async function getAvailableHours(
  selectedDate: Date
) {

  // DOMINGO
  if (selectedDate.getDay() === 0) {
    return [];
  }

  const hours = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const startOfDay = new Date(selectedDate);
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date(selectedDate);
  endOfDay.setHours(23, 59, 59, 999);

  const appointments =
    await prisma.appointment.findMany({
      where: {
        appointment: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      select: {
        appointment: true,
      },
    });

  const occupiedHours = appointments.map((a) => {

    return a.appointment
      .toLocaleTimeString("es-CO", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
  });

  const now = new Date();

  const availableHours = hours.filter((hour) => {

    // OCUPADO
    if (occupiedHours.includes(hour)) {
      return false;
    }

    // HORA PASADA
    const [h, m] = hour.split(":").map(Number);

    const slotDate = new Date(selectedDate);
    slotDate.setHours(h, m, 0, 0);

    if (slotDate < now) {
      return false;
    }

    return true;
  });

  return availableHours;
}