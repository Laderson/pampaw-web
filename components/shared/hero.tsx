import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-24">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-neutral-50/50 blur-3xl" />
      
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        {/* Left Content */}
        <div className="relative z-10">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">
            Est. 2024 — Barranquilla
          </span>
          
          <h1 className="mt-8 text-5xl font-black tracking-tighter text-neutral-900 md:text-8xl leading-[0.85]">
            Cuidado <br />
            <span className="text-neutral-200">Excepcional.</span>
          </h1>

          <p className="mt-8 max-w-md text-base md:text-lg leading-relaxed text-neutral-500 font-medium">
            Experiencia premium en bienestar animal. Un santuario dedicado a la salud y felicidad de tu mejor amigo.
          </p>


          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-6">
            <Link
              href="/agendar-cita"
              className="rounded-full bg-black px-12 py-5 text-[10px] font-black uppercase tracking-[0.25em] text-white transition hover:bg-neutral-800 active:scale-95"
            >
              Reservar Ahora
            </Link>

            <Link
              href="/tienda-mascotas-barranquilla"
              className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-900"
            >
              Explorar Tienda
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-100 transition-colors group-hover:bg-neutral-50">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative lg:ml-auto">
          <div className="relative aspect-[4/5] w-full max-w-[500px] overflow-hidden rounded-[2.5rem] bg-neutral-50">
            <img
              src="/images/hero-dog.jpg"
              alt="Mascota feliz en Pampaw"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}