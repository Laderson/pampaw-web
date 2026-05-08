"use client";

import { useEffect, useState } from "react";
import { createAppointment } from "@/actions/appointments/create-appointment";
import GoogleAuthButton from "@/components/appointments/google-auth-button";

type FinalDataFormProps = {
  serviceId: string;
  appointmentDate: string;
};

export default function FinalDataForm({ serviceId, appointmentDate }: FinalDataFormProps) {
  const [formData, setFormData] = useState({
    ownerName: "",
    phone: "",
    petName: "",
    petType: "DOG",
    serviceId: serviceId,
    appointment: appointmentDate
  });

  useEffect(() => {
    const handleGoogleSuccess = (e: any) => {
      const { name } = e.detail;
      setFormData(prev => ({
        ...prev,
        ownerName: name || prev.ownerName
      }));
    };

    window.addEventListener('google-login-success', handleGoogleSuccess);
    return () => window.removeEventListener('google-login-success', handleGoogleSuccess);
  }, []);

  return (
    <div className="space-y-8">
      {/* Google Auth - Opcional al final */}
      <div className="space-y-4 mb-10 pb-10 border-b border-neutral-100">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
          ¿Quieres llenarlo más rápido?
        </p>
        <GoogleAuthButton />
        <div className="relative pt-6">
          <div className="absolute inset-0 flex items-center mt-6">
            <div className="w-full border-t border-neutral-100"></div>
          </div>
          <div className="relative flex justify-center text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="bg-white px-4 text-neutral-400">O ingresa manualmente</span>
          </div>
        </div>
      </div>

      <form action={createAppointment} className="grid gap-8">
        <input type="hidden" name="serviceId" value={formData.serviceId} />
        <input type="hidden" name="appointment" value={formData.appointment} />

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Tu Nombre</label>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
              required
              placeholder="Ej: Juan Pérez"
              className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-6 py-5 text-sm outline-none transition focus:border-black focus:bg-white"
            />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Teléfono</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              placeholder="Ej: 3001234567"
              className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-6 py-5 text-sm outline-none transition focus:border-black focus:bg-white"
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Nombre de la Mascota</label>
            <input
              type="text"
              name="petName"
              value={formData.petName}
              onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
              required
              placeholder="Ej: Max"
              className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-6 py-5 text-sm outline-none transition focus:border-black focus:bg-white"
            />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Especie</label>
            <select
              name="petType"
              value={formData.petType}
              onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
              className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-6 py-5 text-sm outline-none transition focus:border-black focus:bg-white appearance-none"
            >
              <option value="DOG">Perro</option>
              <option value="CAT">Gato</option>
              <option value="OTHER">Otro</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 w-full rounded-full bg-black px-8 py-6 text-xs font-black uppercase tracking-[0.4em] text-white transition hover:bg-neutral-800 active:scale-95 shadow-xl"
        >
          Confirmar Reserva
        </button>
      </form>
    </div>
  );
}
