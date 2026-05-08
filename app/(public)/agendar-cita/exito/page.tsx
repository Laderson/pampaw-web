import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-neutral-50 text-4xl">
          ✨
        </div>
        
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">
          Reserva Confirmada
        </span>
        
        <h1 className="mt-6 text-4xl font-black tracking-tighter text-neutral-900 md:text-5xl">
          ¡Todo listo para <br />
          <span className="text-neutral-200">tu mascota!</span>
        </h1>

        <p className="mt-8 text-lg font-medium leading-relaxed text-neutral-500">
          Tu cita ha sido agendada con éxito y ya aparece en nuestro calendario. Te esperamos pronto en Pampaw.
        </p>

        <div className="mt-12 flex flex-col gap-4">
          <Link
            href="/"
            className="rounded-full bg-black px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-neutral-800 active:scale-95 shadow-xl shadow-neutral-100"
          >
            Volver al Inicio
          </Link>
          
          <Link
            href="/dashboard/calendar"
            className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-neutral-900 transition-colors"
          >
            Ver en el Calendario
          </Link>
        </div>
      </div>
    </main>
  );
}
