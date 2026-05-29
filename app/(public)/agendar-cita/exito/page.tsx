import Link from "next/link";

import { prisma } from "@/lib/prisma";

import {
  CalendarDays,
  PawPrint,
  Phone,
  ArrowLeft,
  Clock3,
  CheckCircle2,
} from "lucide-react";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{
    appointmentId?: string;
  }>;
}) {

  const params = await searchParams;

  const appointmentId = params.appointmentId;

  if (!appointmentId) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7F4EE]">
        <p className="text-[#7A5C3E]">No se encontró la cita.</p>
      </main>
    );
  }

  const appointment = await prisma.appointment.findUnique({
    where: {
      id: appointmentId,
    },
    include: {
      service: true,
    },
  });

  if (!appointment) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7F4EE]">
        <p className="text-[#7A5C3E]">La cita no existe.</p>
      </main>
    );
  }

  const formattedDate = new Intl.DateTimeFormat("es-CO", {
    dateStyle: "full",
  }).format(appointment.appointment);

  const formattedHour = new Intl.DateTimeFormat("es-CO", {
    timeStyle: "short",
  }).format(appointment.appointment);

  return (
    <main className="min-h-screen bg-[#F7F4EE] px-6 pt-40 pb-20">

      <div className="mx-auto max-w-3xl">

        {/* SUCCESS HEADER */}
        <div className="mb-10 text-center">

          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#4E5B31] text-white shadow-2xl">
            <CheckCircle2 className="h-12 w-12" />
          </div>

          <p className="mb-3 text-[11px] font-black uppercase tracking-[0.4em] text-[#9B8B78]">
            Reserva confirmada
          </p>

          <h1 className="text-4xl font-black tracking-tight text-[#4E5B31] md:text-5xl">
            ¡Tu cita fue agendada!
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#7A5C3E]">
            Ya recibimos tu solicitud correctamente.
          </p>

        </div>

        {/* CARD */}
        <div className="overflow-hidden rounded-[2rem] border border-[#E6DED2] bg-white shadow-2xl">

          {/* TOP */}
          <div className="border-b border-[#D8D0C4] bg-[#4E5B31] px-8 py-8 text-white">

            <div className="flex items-center gap-3">

              <PawPrint className="h-6 w-6" />

              <div>

                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#D8D0C4]">
                  Servicio reservado
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  {appointment.service.name}
                </h2>

              </div>

            </div>

          </div>

          {/* CONTENT */}
          <div className="grid gap-8 p-8 md:grid-cols-2">

            {/* DATE */}
            <div className="rounded-3xl border border-[#E6DED2] bg-[#F7F4EE] p-6">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#4E5B31] shadow-sm">
                <CalendarDays className="h-7 w-7" />
              </div>

              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9B8B78]">
                Fecha
              </p>

              <h3 className="mt-3 text-lg font-bold capitalize leading-snug text-[#4E5B31]">
                {formattedDate}
              </h3>

            </div>

            {/* HOUR */}
            <div className="rounded-3xl border border-[#E6DED2] bg-[#F7F4EE] p-6">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#4E5B31] shadow-sm">
                <Clock3 className="h-7 w-7" />
              </div>

              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9B8B78]">
                Hora
              </p>

              <h3 className="mt-3 text-3xl font-black text-[#4E5B31]">
                {formattedHour}
              </h3>

            </div>

          </div>

          {/* OWNER */}
          <div className="border-t border-[#E6DED2] px-8 py-8">

            <p className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#9B8B78]">
              Datos de la reserva
            </p>

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <p className="text-sm text-[#9B8B78]">
                  Responsable
                </p>

                <h4 className="mt-1 text-lg font-bold text-[#4E5B31]">
                  {appointment.ownerName}
                </h4>

              </div>

              <div>

                <p className="text-sm text-[#9B8B78]">
                  Mascota
                </p>

                <h4 className="mt-1 text-lg font-bold text-[#4E5B31]">
                  {appointment.petName}
                </h4>

              </div>

            </div>

          </div>

          {/* CTA */}
          <div className="border-t border-[#E6DED2] bg-[#F7F4EE] px-8 py-8">

            <div className="flex flex-col gap-4 md:flex-row">

              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-3 rounded-full bg-[#4E5B31] px-8 py-5 text-xs font-black uppercase tracking-[0.3em] text-white transition hover:scale-[1.02] hover:bg-[#3F4A28]"
              >
                <Phone className="h-4 w-4" />
                WhatsApp
              </a>

              <Link
                href="/"
                className="flex flex-1 items-center justify-center gap-3 rounded-full border border-[#E6DED2] bg-white px-8 py-5 text-xs font-black uppercase tracking-[0.3em] text-[#4E5B31] transition hover:bg-[#F7F4EE]"
              >
                <ArrowLeft className="h-4 w-4" />
                Volver al inicio
              </Link>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}