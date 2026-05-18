"use client";

import {
  useEffect,
  useState,
  useActionState,
} from "react";

import { createAppointment } from "@/actions/appointments/create-appointment";

import GoogleAuthButton from "@/components/appointments/google-auth-button";

type FinalDataFormProps = {
  serviceId: string;
  appointmentDate: string;
};

export default function FinalDataForm({
  serviceId,
  appointmentDate,
}: FinalDataFormProps) {

  // FORM DATA
  const [formData, setFormData] = useState({
    ownerName: "",
    email: "",
    phone: "",
    address: "",

    petName: "",
    petType: "DOG",
    petBreed: "",
    petGender: "MALE",

    serviceId,
    appointment: appointmentDate,
  });

  // ACTION STATE
  const [state, formAction, isPending] = useActionState(
    createAppointment,
    null
  );

  // GOOGLE AUTH
  useEffect(() => {

    const handleGoogleSuccess = (e: any) => {

      const { name, email } = e.detail;

      setFormData((prev) => ({
        ...prev,
        ownerName: name || prev.ownerName,
        email: email || prev.email,
      }));
    };

    window.addEventListener(
      "google-login-success",
      handleGoogleSuccess
    );

    return () =>
      window.removeEventListener(
        "google-login-success",
        handleGoogleSuccess
      );

  }, []);

  return (
    <div className="space-y-8">

      {/* GOOGLE AUTH */}
      <div className="space-y-4 mb-10 pb-10 border-b border-neutral-100">

        <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
          ¿Quieres llenarlo más rápido?
        </p>

        <GoogleAuthButton />

        <div className="relative pt-6">

          <div className="absolute inset-0 flex items-center mt-6">
            <div className="w-full border-t border-neutral-100"></div>
          </div>

          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-neutral-400">
              O llena los datos manualmente
            </span>
          </div>

        </div>

      </div>

      {/* FORM */}
      <form
        action={formAction}
        className="grid gap-8"
      >

        {/* HIDDEN */}
        <input
          type="hidden"
          name="serviceId"
          value={formData.serviceId}
        />

        <input
          type="hidden"
          name="appointment"
          value={formData.appointment}
        />

        {/* OWNER */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* NAME */}
          <div className="space-y-3">

            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
              Tu Nombre
            </label>

            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  ownerName: e.target.value,
                })
              }
              required
              placeholder="Ej: Juan Pérez"
              className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-6 py-5 text-sm outline-none transition focus:border-black focus:bg-white"
            />

            {state?.errors?.fieldErrors?.ownerName && (
              <p className="text-sm text-red-500">
                {state.errors.fieldErrors.ownerName[0]}
              </p>
            )}

          </div>

          {/* PHONE */}
          <div className="space-y-3">

            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
              Teléfono
            </label>

            <input
              type="tel"
              inputMode="numeric"
              pattern="[0-9]{10}"
              title="Ingresa un número válido de 10 dígitos"
              name="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value,
                })
              }
              required
              placeholder="Ej: 3001234567"
              className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-6 py-5 text-sm outline-none transition focus:border-black focus:bg-white"
            />

            {state?.errors?.fieldErrors?.phone && (
              <p className="text-sm text-red-500">
                {state.errors.fieldErrors.phone[0]}
              </p>
            )}

          </div>

        </div>

        {/* EMAIL */}
        <div className="space-y-3">

          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
            Correo Electrónico
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            required
            placeholder="Ej: juan@gmail.com"
            className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-6 py-5 text-sm outline-none transition focus:border-black focus:bg-white"
          />

          {state?.errors?.fieldErrors?.email && (
            <p className="text-sm text-red-500">
              {state.errors.fieldErrors.email[0]}
            </p>
          )}

        </div>

        {/* ADDRESS */}
        <div className="space-y-3">

          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
            Dirección
          </label>

          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={(e) =>
              setFormData({
                ...formData,
                address: e.target.value,
              })
            }
            required
            placeholder="Ej: Cra 45 # 72-120"
            className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-6 py-5 text-sm outline-none transition focus:border-black focus:bg-white"
          />

          {state?.errors?.fieldErrors?.address && (
            <p className="text-sm text-red-500">
              {state.errors.fieldErrors.address[0]}
            </p>
          )}

        </div>

        {/* PET */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* PET NAME */}
          <div className="space-y-3">

            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
              Nombre de la Mascota
            </label>

            <input
              type="text"
              name="petName"
              value={formData.petName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  petName: e.target.value,
                })
              }
              required
              placeholder="Ej: Max"
              className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-6 py-5 text-sm outline-none transition focus:border-black focus:bg-white"
            />

            {state?.errors?.fieldErrors?.petName && (
              <p className="text-sm text-red-500">
                {state.errors.fieldErrors.petName[0]}
              </p>
            )}

          </div>

          {/* PET TYPE */}
          <div className="space-y-3">

            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
              Especie
            </label>

            <select
              name="petType"
              value={formData.petType}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  petType: e.target.value,
                })
              }
              className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-6 py-5 text-sm outline-none transition focus:border-black focus:bg-white appearance-none"
            >
              <option value="DOG">Perro</option>
              <option value="CAT">Gato</option>
              <option value="OTHER">Otro</option>
            </select>

          </div>

        </div>

        {/* BREED + GENDER */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* BREED */}
          <div className="space-y-3">

            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
              Raza
            </label>

            <input
              type="text"
              name="petBreed"
              value={formData.petBreed}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  petBreed: e.target.value,
                })
              }
              placeholder="Ej: Golden Retriever"
              className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-6 py-5 text-sm outline-none transition focus:border-black focus:bg-white"
            />

          </div>

          {/* GENDER */}
          <div className="space-y-3">

            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
              Género
            </label>

            <select
              name="petGender"
              value={formData.petGender}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  petGender: e.target.value,
                })
              }
              className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-6 py-5 text-sm outline-none transition focus:border-black focus:bg-white appearance-none"
            >
              <option value="MALE">Macho</option>
              <option value="FEMALE">Hembra</option>
            </select>

          </div>

        </div>

        {/* GLOBAL ERROR */}
        {state?.message && (
          <p className="text-center text-sm text-red-500">
            {state.message}
          </p>
        )}

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={isPending}
          className="mt-8 w-full rounded-full bg-black px-8 py-6 text-xs font-black uppercase tracking-[0.4em] text-white transition hover:bg-neutral-800 active:scale-95 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending
            ? "Procesando..."
            : "Confirmar Reserva"}
        </button>

      </form>

    </div>
  );
}